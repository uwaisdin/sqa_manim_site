import { useState, useEffect } from 'react';
import HamburgerMenu from './Menu';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export default function ComingSoon() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

const sections = [
  { id: 'section-1', title: 'Surds' },
  { id: 'section-2', title: 'The Laws of Indices' },
  { id: 'section-3', title: 'Rounding' },
  { id: 'section-4', title: 'Reverse Percentages' },
  { id: 'section-5', title: 'Appreciation and Depreciation' },
  { id: 'section-6', title: 'Fractions' },
  { id: 'section-7', title: 'Factorising Algebraic Expressions' },
  { id: 'section-8', title: 'Completing the Square' },
  { id: 'section-9', title: 'Simpliyfying Algebraic Equations' },
  { id: 'section-10', title: 'Equation of a Straight line' },
  { id: 'section-11', title: 'Circle Geometry' },
  { id: 'section-12', title: 'Voluime of a Solid'},
  { id: 'section-12', title: 'Pythagoras\' Theorem'},
  { id: 'section-12', title: 'Vectors and Coordinates'},
  { id: 'section-12', title: 'Statistics'}
  // ...continue for the rest
];


  return (
    <div className="relative w-full scroll-smooth">
      {/* Background Video Section */}
      <div className="relative h-screen w-full overflow-hidden">

        <HamburgerMenu />

        <div className="absolute top-0 left-0 z-10 text-white p-6 max-w-4xl">
          <h1 className="text-3xl font-semibold text-gray-300 mb-4">National 5: Contents</h1>
          <p className="text-base text-gray-200 mb-6">Click a lesson to scroll down.</p>

          {/* Square Grid Links */}
          <div className="grid grid-cols-2 gap-4">
            {sections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="w-full bg-black bg-opacity-10 text-white px-4 py-2 rounded-md hover:bg-opacity-20 transition text-xl font-small"
          >
            {title}
          </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
<div className="bg-black text-white px-6 py-10 space-y-20">
  {sections.map(({ id, title }, index) => (
    <section key={id} id={id} className="max-w-3xl mx-auto scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

{index === 0 ? (
  <>
    {/* Blank paragraph for you to fill in */}
    <p className="text-gray-300 mb-6">
      Surds are irrational numbers. These are numbers which cannot be
      represented by the ratio of 2 integers. If you don't know what this means
      yet, don't worry, we will go through it step by step. Then we 
      will go through the rules for working with surds. But first 
      check out this animation showing how amazing surds can be.&nbsp;</p>

    <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
        src="/SurdSpiral.mp4"
        type="video/mp4"
      />
    </div>

    <p className="text-gray-200 mb-6">
      Woah. I know — it looks a little scary, right? All those lines spiralling 
      out. But it also looks kind of familiar... like a shell. Or even the swirl of a galaxy.
    </p>
    <p className="text-gray-200 mb-6">
      And here’s the crazy part: this shape was made entirely from square roots
       — just simple triangles, one after another.
      </p>
      <p className="text-gray-200 mb-6">
      So perhaps on your next visit to the beach when you see a shell, you might start to see surds. I wonder what other 
      things we can model with maths? Before we answer that question, lets learn
      some more about surds!
      </p>

      <p className="text-gray-200 mb-6">
      To understand what surds are, we first have to learn about some simple numbers. 
      Integers are numbers we can count on our fingers — like 1, 2, 3...
      But they don’t just go up, they go down too, into negative numbers like -1, -2, -3.
      We can show these numbers visually on what’s called a number line:
      <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          src="/NL.mp4"
          type="video/mp4"
        />
    </div>
      
       </p>
    <p className="text-gray-200 mb-6">
      But what about the numbers in between two integers? 
      Can we represent those? Lets zoom in and find out!
      <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          src="/NL_zoom.mp4"
          type="video/mp4"
        />
    </div>
    <p className="text-gray-200 mb-6">As shown above, we can. Thanks to the
      power of the decimal point. In the above example, we split the portion of
      the number line ranging between 0 and 1 into 10 sections. We can see this
      by counting the number of sections between the ticks on the line. You might
      have to be quick! The animation might refresh.
    </p>
    <p className="text-gray-200 mb-6">
      We can calculate size of the increments on our number line by dividing 
      the interval by the number of slices we want to split our number
      line into. Or if we want to use maths we can say:
    </p>
    <p className="text-gray-200 mb-6 text-center">
       <InlineMath math="\text{size of
        increments} = \text{interval length} \div
        \text{number of slices wanted} = \frac{\text{interval length}}
        {\text{number of slices wanted}}" />
    </p>
    <p className="text-gray-200 mb-6">
      So in this case, our interval ranges from 0 to 1, so it has a length of 1,
      and we split it into 10 equal slices, so we can calculate the size of our
      increments using the above equation: 
    </p>
        <p className="text-gray-200 mb-6 text-center">
       <InlineMath math="\text{size of
        increments} = \frac{\text{interval length}}
        {\text{number of slices wanted}} = \frac{1}{10} = 0.1" />
    </p>
    <p className="text-gray-200 mb-6">
      From this, we can see that decimal numbers on our above number line can
      be written as the ratio (fraction) of two integers. So if we wanted to,
      we can label our number line like this:
      <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          src="/NL2.mp4"
          type="video/mp4"
        />
      </div>
    </p>

    <p className="text-gray-200 mb-6">
      But why is this of importance? Imagine if we wanted to divide our interval
      between 0 and 1 into 3 equal slices. By using the equation above we can
      calculate the size of the increments:
      </p>

    <p className="text-gray-200 mb-6 text-center">
       <InlineMath math="\text{size of
        increments} = \frac{\text{interval length}}
        {\text{number of slices wanted}} = \frac{1}{3} = 0.3333333..." />
    </p>
    <p className="text-gray-200 mb-6 text">We get a number with an
      infinite amount of decimal places! Let's try and represent that number
      on our number line and see what happens. 
        <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          src="/NL_zoom2.mp4"
          type="video/mp4"
        />
      </div>
    </p>
        <p className="text-gray-200 mb-6 text">As shown above no matter how much
          we zoom in, we can never represnet <InlineMath math="\text{ }\frac{1}{3} \text{ }" /> 
          on the number line decimal notation. So we must represent it as a fraction.
    </p>
    <p className="text-gray-200 mb-6">
      Surds are a lot like the number <InlineMath math="\text{ }\frac{1}{3} \text{ }" />. 
      They have an infinite amount of decimal places except they can't be 
      represented by the ratio of 2 integers!? We call numbers like surds
      irrational numbers, and numbers like  <InlineMath math="\text{ }\frac{1}{3} \text{ }" />. 
      rational numbers. Lets take a look at an example of a surd:
      </p>
      <p className="text-gray-200 mb-6 text-center">
        <InlineMath math="\sqrt{2} = 1.414213562..." />
      </p>
      <p className="text-gray-200 mb-6">
        surds are numbers like <InlineMath math="\frac{1}{3}" />. They have
        an infinite number of decimal places, but unlike <InlineMath math="\frac{1}{3}" />
        they cannot be represented by a ratio of two integers. So, how do we locate the
        exact position of surds on the number line? The video at the start might give you
        a clue, but lets take a look.
        <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          src="/OneSurd.mp4"
          type="video/mp4"
        />
      </div>
      <p className="text-gray-200 mb-6">
      This works because of a clever discovery by a man named Pythagoras. He realised that in a right-angled triangle, the diagonal side — called the hypotenuse — is related to the two shorter sides in a special way:
      If you square the lengths of the two shorter sides, and then add them together, you'll get the square of the hypotenuse. Or in simple math terms:
      </p>
      <p className="text-gray-200 mb-6 text-center">
            <InlineMath math="a^2 + b^2 = c^2" />
      </p>
      <p className="text-gray-200 mb-6">
      So in our example a and b are both equal to 1, so using the above equation
      we can calculate the length of the hypotenuse, c:
      </p>
            <p className="text-gray-200 mb-6 text-center">
            <BlockMath math={String.raw`
            \begin{align*}
            a^2 + b^2 = c^2 \\
            c^2 = 1^2 + 1^2 \\
            c^2 = 2 \Rightarrow c = \sqrt{2}
            \end{align*}
            `} />
      </p>
      Doing this with different numbers we can any surd we would like, as demonstrated by 
      the sprial we showcased at the start.

      </p>
      
    


    </p>
    

    
  </>
) : (
  <p className="text-gray-500 italic">Lesson content coming soon.</p>
)}
          </section>
        ))}
      </div>
    </div>
  );
}
