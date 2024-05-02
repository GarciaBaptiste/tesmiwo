import './App.css'
import styled from 'styled-components'

const Test = styled.div`
  width: 36px;
  height: 100%;
  background: black;
  position: absolute;
  left: 50%;
`;

const BasicLetter = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

const Stroke = styled.div`
  background: black;
`;

const QuarterCircleWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

const QuarterCircleBackground = styled.div`
  background: black;
  width: 200%;
  height: 200%;
  border-radius: 100%;
  position: absolute;
`;

const QuarterCircleForeground = styled.div`
  background: white;
  width: calc(200% - calc(${props => props.$strokex} * 2));
  height: calc(200% - calc(${props => props.$strokey} * 2));
  border-radius: 100%;
  position: absolute;
  left: ${props => props.$strokex};
  top: ${props => props.$strokey};
`;

const QuarterCircle = (props) => {
  const { style, $strokex, $strokey } = props;
  return (
    <div style={style}>
      <QuarterCircleWrapper>
        <QuarterCircleBackground />
        <QuarterCircleForeground $strokex={$strokex} $strokey={$strokey} />
      </QuarterCircleWrapper>
    </div>
  )
}

const SerifWrapper = styled.div`
  position: relative;
  width: var(--l);
  height: 100%;
  overflow: hidden;
  mix-blend-mode: darken;
  justify-self: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return "end";
      case "tl":
        return "end";
      case "tr":
        return "start";
      case "br" :
        return "start";
    }
  }}
`;

const SerifBackground = styled.div`
  position: absolute;
  background: black;
  width: var(--l);
  height: var(--l);
`;

const SerifForeground = styled.div`
  position: absolute;
  width: calc(var(--l) * 2);
  height: calc(var(--l) * 2);
  background: white;
  border-radius: 100%;
  top: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return "unset";
      case "tl":
        return "var(--s)";
      case "tr":
        return "var(--s)";
      case "br":
        return "unset";
    }
  }};
  right: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return 0;
      case "tl":
        return 0;
      case "tr":
        return "unset";
      case "br":
        return "unset";
    }
  }};
  bottom: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return "var(--s)";
      case "tl":
        return "unset";
      case "tr":
        return "unset";
      case "br":
        return "var(--s)";
    }
  }};
  left: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return "unset";
      case "tl":
        return "unset";
      case "tr":
        return 0;
      case "br":
        return 0;
    }
  }};
`;

const Serif = (props) => {
  const { style, orientation } = props;
  return (
    <SerifWrapper orientation={orientation} style={style}>
      <SerifBackground />
      <SerifForeground orientation={orientation} />
    </SerifWrapper>
  )
}

const LetterA = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--s) var(--m) 1fr var(--m) var(--l) var(--m)", gridTemplateRows: "var(--s) 2.5fr var(--s) 1fr var(--l)" }}>
      <QuarterCircle style={{ gridColumn: " 2 / span 4", gridRow: "span 2" }} $strokex="var(--s)" $strokey="var(--s)" />
      <Stroke style={{ gridColumn: "2", gridRow: "3 / span 3" }} />
      <Stroke style={{ gridColumn: "6", gridRow: "1 / span 5" }} />
      <Stroke style={{ gridColumn: "3 / span 3", gridRow: "3" }} />
      <Serif style={{ gridColumn: "1", gridRow: "5" }} orientation="bl" />
      <Serif style={{ gridColumn: "3", gridRow: "5" }} orientation="br" />
      <Serif style={{ gridColumn: "5", gridRow: "5" }} orientation="bl" />
      <Serif style={{ gridColumn: "7", gridRow: "5" }} orientation="br" />
    </BasicLetter>
  )
};

function App() {
  return (
    <section id="main">
      <LetterA />
    </section>
  )
}

export default App
