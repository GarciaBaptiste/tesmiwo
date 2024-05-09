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
  height: ${props => props.$offsety ? "calc(100% + var(--s) * 2)" : "100%"};
  margin-top: ${props => props.$offsety ? "calc(-1 * var(--s))" : "unset"};
`;

const Strok = styled.div`
  background: black;
`;

const RoundWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  min-width: ${props => props.$strokex};
  mix-blend-mode: darken;
`;

const RoundBackground = styled.div`
  background: black;
  width: 200%;
  height: 200%;
  border-radius: ${props => props.$square ? "100vmax" : "100%"};
  position: absolute;
  top: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return "unset";
      case "tl":
        return 0;
      case "tr":
        return 0;
      case "br":
        return "unset";
    }
  }};
  right: ${(props) => {
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
  bottom: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return 0;
      case "tl":
        return "unset";
      case "tr":
        return "unset";
      case "br":
        return 0;
    }
  }};
  left: ${(props) => {
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
`;

const RoundForeground = styled.div`
  background: white;
  width: calc(200% - calc((${props => props.$strokex} * 2))${props => props.$thickerx ? " - calc(var(--l) * 0.2)" : ""});
  height: calc(200% - calc(${props => props.$strokey} * 2));
  border-radius: ${props => props.$square ? "100vmax" : "100%"};
  position: absolute;
  top: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return "unset";
      case "tl":
        return props => props.$strokey;
      case "tr":
        return props => props.$strokey;
      case "br":
        return "unset";
    }
  }};
  right: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return "unset";
      case "tl":
        return "unset";
      case "tr":
        return `calc(${props.$strokex} ${props.$thickerx ? "+ (var(--l) * 0.1)" : ""})`;
      case "br":
        return `calc(${props.$strokex} ${props.$thickerx ? "+ (var(--l) * 0.1)" : ""})`;
    }
  }};
  bottom: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return props => props.$strokey;
      case "tl":
        return "unset";
      case "tr":
        return "unset";
      case "br":
        return props => props.$strokey;
    }
  }};
  left: ${(props) => {
    switch (props.orientation) {
      case "bl":
        return `calc(${props.$strokex} ${props.$thickerx ? "+ (var(--l) * 0.1)" : ""})`;
      case "tl":
        return `calc(${props.$strokex} ${props.$thickerx ? "+ (var(--l) * 0.1)" : ""})`;
      case "tr":
        return "unset";
      case "br":
        return "unset";
    }
  }};
`;

const Round = (props) => {
  const { style, orientation, $strokex, $strokey, $square, $thickerx } = props;
  return (
    <div style={style}>
      <RoundWrapper $strokex={$strokex}>
        <RoundBackground orientation={orientation} $square={$square} />
        <RoundForeground orientation={orientation} $strokex={$strokex} $strokey={$strokey} $square={$square} $thickerx={$thickerx} />
      </RoundWrapper>
    </div>
  )
}

const SerifWrapper = styled.div`
  position: relative;
  width: var(--l);
  height: 100%;
  mix-blend-mode: darken;
  justify-self: ${(props) => {
    switch (props.orientation) {
      case "hbl":
        return "end";
      case "htl":
        return "end";
      case "htr":
        return "start";
      case "hbr":
        return "start";
    }
  }}
`;

const SerifBackground = styled.div`
  position: absolute;
  background: black;
  width: var(--l);
  height: var(--l);
  top: ${(props) => {
    switch (props.orientation) {
      case "hbl":
        return "";
      case "htl":
        return "";
      case "htr":
        return "";
      case "hbr":
        return "";
      case "vbl":
        return "";
      case "vtl":
        return "";
      case "vtr":
        return "";
      case "vbr":
        return "unset";
    }
  }};
  bottom: ${(props) => {
    switch (props.orientation) {
      case "hbl":
        return "";
      case "htl":
        return "";
      case "htr":
        return "";
      case "hbr":
        return "";
      case "vbl":
        return "";
      case "vtl":
        return "";
      case "vtr":
        return "";
      case "vbr":
        return 0;
    }
  }};
`;

const SerifForeground = styled.div`
  position: absolute;
  width: calc(var(--l) * 2);
  height: calc(var(--l) * 2);
  background: white;
  border-radius: 100%;
  top: ${(props) => {
    switch (props.orientation) {
      case "hbl":
        return "unset";
      case "htl":
        return "var(--s)";
      case "htr":
        return "var(--s)";
      case "hbr":
        return "unset";
      case "vbl":
        return "";
      case "vtl":
        return "";
      case "vtr":
        return 0;
      case "vbr":
        return "unset";
    }
  }};
  right: ${(props) => {
    switch (props.orientation) {
      case "hbl":
        return 0;
      case "htl":
        return 0;
      case "htr":
        return "unset";
      case "hbr":
        return "unset";
      case "vbl":
        return "";
      case "vtl":
        return "";
      case "vtr":
        return "var(--s)";
      case "vbr":
        return "var(--s)";
    }
  }};
  bottom: ${(props) => {
    switch (props.orientation) {
      case "hbl":
        return "var(--s)";
      case "htl":
        return "unset";
      case "htr":
        return "unset";
      case "hbr":
        return "var(--s)";
      case "vbl":
        return "";
      case "vtl":
        return "";
      case "vtr":
        return "unset";
      case "vbr":
        return 0;
    }
  }};
  left: ${(props) => {
    switch (props.orientation) {
      case "hbl":
        return "unset";
      case "htl":
        return "unset";
      case "htr":
        return 0;
      case "hbr":
        return 0;
      case "vbl":
        return "";
      case "vtl":
        return "";
      case "vtr":
        return "unset";
      case "vbr":
        return "unset";
    }
  }};
`;

const Serif = (props) => {
  const { style, orientation } = props;
  return (
    <SerifWrapper orientation={orientation} style={style}>
      <SerifBackground orientation={orientation} />
      <SerifForeground orientation={orientation} />
    </SerifWrapper>
  )
}

const LetterA = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--s) var(--m) 1fr var(--m) var(--l) var(--m)", gridTemplateRows: "var(--s) 2.5fr var(--s) 1fr var(--l)", flex: "0.65" }}>
      <Round style={{ gridArea: "1 / 2 / 3 / 6" }} $strokex="var(--s)" $strokey="var(--s)" orientation="tl" $square={true} />
      <Strok style={{ gridArea: "3 / 2 / 6 / 3" }} />
      <Strok style={{ gridArea: "1 / 6 / 6 / 7" }} />
      <Strok style={{ gridArea: "3 / 2 / 4 / 6" }} />
      <Serif style={{ gridArea: "5 / 1 / 6 / 2" }} orientation="hbl" />
      <Serif style={{ gridArea: "5 / 3 / 6 / 4" }} orientation="hbr" />
      <Serif style={{ gridArea: "5 / 5 / 6 / 6" }} orientation="hbl" />
      <Serif style={{ gridArea: "5 / 7 / 6 / 8" }} orientation="hbr" />
    </BasicLetter>
  )
};

const LetterC = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "1fr 0.25fr var(--l) 0.15fr", gridTemplateRows: "var(--s) var(--m) 1fr 0.25fr 0.75fr var(--m) var(--s)", flex: "0.75", marginLeft: "-1.5%" }} $offsety={true}>
      <Round style={{ gridArea: "1 / 1 / 4 / 2" }} orientation="tl" $square={true} $strokex="var(--l)" $strokey="var(--s)" $thickerx={true} />
      <Strok style={{ gridArea: "1 / 2 / 2 / 4" }} />
      <Serif style={{ gridArea: "1 / 3 / 2 / 4" }} orientation="vtr" />
      <Round style={{ gridArea: "4 / 1 / 8 / 2" }} orientation="bl" $square={true} $strokex="var(--l)" $strokey="var(--s)" $thickerx={true} />
      <Round style={{ gridArea: "5 / 2 / 8 / 5" }} orientation="br" $strokex="var(--s)" $strokey="var(--s)" $square={true} />
    </BasicLetter>
  )
}

const LetterD = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "0.2fr var(--l) 0.25fr 1fr", gridTemplateRows: "var(--s) 1fr 1fr var(--s)", flex: "0.85", marginLeft: "-1.5%", marginRight: "-1%" }}>
      <Strok style={{ gridArea: "1 / 1 / 2 / 2" }} />
      <Strok style={{ gridArea: "1 / 2 / 5 / 3" }} />
      <Strok style={{ gridArea: "4 / 1 / 5 / 2" }} />
      <Strok style={{ gridArea: "1 / 3 / 2 / 4" }} />
      <Strok style={{ gridArea: "4 / 3 / 5 / 4" }} />
      <Round style={{ gridArea: "1 / 4 / 3 / 5" }} orientation="tr" $strokex="var(--l)" $strokey="var(--s)" $square={true} $thickerx={true} />
      <Round style={{ gridArea: "3 / 4 / 5 / 5" }} orientation="br" $strokex="var(--l)" $strokey="var(--s)" $square={true} $thickerx={true} />
    </BasicLetter>
  )
}

const LetterE = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "0.2fr var(--l) 1fr var(--l) var(--l)", gridTemplateRows: "var(--s) var(--m) 1fr var(--m) var(--s) var(--m) 1fr var(--m) var(--s)", flex: "0.65" }}>
      <Strok style={{ gridArea: "1 / 1 / 2 / 2" }} />
      <Strok style={{ gridArea: "1 / 2 / 10 / 3" }} />
      <Strok style={{ gridArea: "9 / 1 / 10 / 2" }} />
      <Strok style={{ gridArea: "1 / 3 / 2 / 6" }} />
      <Strok style={{ gridArea: "5 / 3 / 6 / 5" }} />
      <Strok style={{ gridArea: "9 / 3 / 10 / 6" }} />
      <Serif style={{ gridArea: "2 / 5 / 3 / 6" }} orientation="vtr" />
      <Serif style={{ gridArea: "4 / 4 / 5 / 5" }} orientation="vbr" />
      <Serif style={{ gridArea: "6 / 4 / 7 / 5" }} orientation="vtr" />
      <Serif style={{ gridArea: "8 / 5 / 9 / 6" }} orientation="vbr" />
    </BasicLetter>
  )
}

const LetterG = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "1fr 0.25fr var(--l) 0.15fr", gridTemplateRows: "var(--s) var(--m) 1fr var(--s) 0.75fr var(--m) var(--s)", flex: "0.75" }} $offsety={true}>
      <Round style={{ gridArea: "1 / 1 / 4 / 2" }} orientation="tl" $square={true} $strokex="var(--l)" $strokey="var(--s)" $thickerx={true} />
      <Strok style={{ gridArea: "1 / 2 / 2 / 4" }} />
      <Serif style={{ gridArea: "2 / 3 / 3 / 4" }} orientation="vtr" />
      <Round style={{ gridArea: "4 / 1 / 8 / 2" }} orientation="bl" $square={true} $strokex="var(--l)" $strokey="var(--s)" $thickerx={true} />
      <Round style={{ gridArea: "5 / 2 / 8 / 5" }} orientation="br" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "4 / 3 / 5 / 5" }} />
    </BasicLetter>
  )
}

function App() {
  return (
    <section id="main">
      <LetterA />
      <LetterC />
      <LetterD />
      <LetterE />
      <LetterG />
    </section>
  )
}

export default App
