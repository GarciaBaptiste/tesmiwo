import './App.css'
import styled from 'styled-components'

const Test = styled.div`
  width: 36px;
  height: 100%;
  background: var(--color1);
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
  background: var(--color1);
  height: ${(props) => {
    switch (props.$flatserif) {
      case "b":
        return "var(--s)";
      case "t":
        return "var(--s)";
      default:
        return "unset";
    }
  }};
  align-self: ${(props) => {
    switch (props.$flatserif) {
      case "b":
        return "end";
      case "t":
        return "unset";
      default:
        return "unset";
    }
  }}
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
  background: var(--color1);
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
  background: var(--color2);
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
  background: var(--color1);
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
  background: var(--color2);
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
        return "var(--s)";
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
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--s) var(--m) 1fr var(--m) var(--l) var(--m)", gridTemplateRows: "var(--s) 2.5fr var(--s) 1fr var(--l)", flex: "0.7" }}>
      <Round style={{ gridArea: "1 / 2 / 3 / 6" }} $strokex="var(--s)" $strokey="var(--s)" orientation="tl" $square={true} />
      <Strok style={{ gridArea: "3 / 2 / 6 / 3" }} />
      <Strok style={{ gridArea: "1 / 6 / 6 / 7" }} />
      <Strok style={{ gridArea: "3 / 2 / 4 / 6" }} />
      <Serif style={{ gridArea: "5 / 1 / 6 / 2" }} orientation="hbl" />
      <Serif style={{ gridArea: "5 / 3 / 6 / 4" }} orientation="hbr" />
      <Strok style={{ gridArea: "5 / 5 / 6 / 6" }} $flatserif="b" />
      <Strok style={{ gridArea: "5 / 7 / 6 / 8" }} $flatserif="b" />
    </BasicLetter>
  )
};

const LetterC = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "1fr 1fr var(--l) 0.25fr", gridTemplateRows: "var(--s) var(--m) 1fr 0.25fr 0.75fr var(--m) var(--s)", flex: "0.75" }} $offsety={true}>
      <Round style={{ gridArea: "1 / 1 / 4 / 2" }} orientation="tl" $square={true} $strokex="var(--l)" $strokey="var(--s)" $thickerx={true} />
      <Strok style={{ gridArea: "1 / 2 / 2 / 4" }} />
      <Serif style={{ gridArea: "2 / 3 / 3 / 4" }} orientation="vtr" />
      <Round style={{ gridArea: "4 / 1 / 8 / 2" }} orientation="bl" $square={true} $strokex="var(--l)" $strokey="var(--s)" $thickerx={true} />
      <Round style={{ gridArea: "5 / 2 / 8 / 5" }} orientation="br" $strokex="var(--s)" $strokey="var(--s)" $square={true} />
    </BasicLetter>
  )
}

const LetterD = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "0.2fr var(--l) 0.25fr 1fr", gridTemplateRows: "var(--s) 1fr 1fr var(--s)", flex: "0.85", marginLeft: "-0.5%", marginRight: "-0.5%" }}>
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
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--l) 1fr var(--l) var(--l)", gridTemplateRows: "var(--s) var(--m) 1fr var(--m) var(--s) var(--m) 1fr var(--m) var(--s)", flex: "0.65", marginLeft: "-0.5%" }}>
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
    <BasicLetter style={{ gridTemplateColumns: "1fr 1fr var(--l) 0.5fr", gridTemplateRows: "var(--s) var(--m) 1fr var(--s) 0.75fr var(--m) var(--s)", flex: "0.75" }} $offsety={true}>
      <Round style={{ gridArea: "1 / 1 / 4 / 2" }} orientation="tl" $square={true} $strokex="var(--l)" $strokey="var(--s)" $thickerx={true} />
      <Strok style={{ gridArea: "1 / 2 / 2 / 4" }} />
      <Serif style={{ gridArea: "2 / 3 / 3 / 4" }} orientation="vtr" />
      <Round style={{ gridArea: "4 / 1 / 8 / 2" }} orientation="bl" $square={true} $strokex="var(--l)" $strokey="var(--s)" $thickerx={true} />
      <Round style={{ gridArea: "5 / 2 / 8 / 5" }} orientation="br" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "4 / 3 / 5 / 5" }} />
    </BasicLetter>
  )
}

const LetterH = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "0.5fr var(--l) 0.5fr 1fr 0.5fr var(--l) 0.5fr", gridTemplateRows: "var(--s) 1fr var(--s) 1fr var(--s)", flex: "0.75", marginLeft: "-1%" }} >
      <Strok style={{ gridArea: "1 / 2 / 6 / 3" }} />
      <Strok style={{ gridArea: "3 / 3 / 4 / 7" }} />
      <Strok style={{ gridArea: "1 / 6 / 6 / 7" }} />
      <Strok style={{ gridArea: "1 / 1 / 2 / 4" }} />
      <Strok style={{ gridArea: "1 / 5 / 2 / 8" }} />
      <Strok style={{ gridArea: "5 / 1 / 6 / 4" }} />
      <Strok style={{ gridArea: "5 / 5 / 6 / 8" }} />
    </BasicLetter>
  )
}

const LetterI = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "0.5fr var(--l) 0.5fr", gridTemplateRows: "var(--s) 1fr var(--s)", flex: "0.35" }} >
      <Strok style={{ gridArea: "1 / 2 / 4 / 3" }} />
      <Strok style={{ gridArea: "1 / 1 / 2 / 4" }} />
      <Strok style={{ gridArea: "3 / 1 / 4 / 4" }} />
    </BasicLetter>
  )
}

const LetterL = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "0.75fr var(--l) 0.75fr 1fr var(--l)", gridTemplateRows: "var(--s) 1fr var(--m) var(--s)", flex: "0.65", marginRight: "-1%" }} >
      <Strok style={{ gridArea: "1 / 1 / 2 / 4" }} />
      <Strok style={{ gridArea: "1 / 2 / 5 / 3" }} />
      <Strok style={{ gridArea: "4 / 1 / 5 / 6" }} />
      {/* <Serif style={{ gridArea: "3 / 5 / 4 / 6" }} orientation="vbr" /> */}
    </BasicLetter>
  )
}

const LetterM = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--s) var(--m) 1fr var(--l) 1fr var(--m) var(--l) var(--m)", gridTemplateRows: "var(--s) 1fr var(--l)", flex: "1", marginLeft: "-1%" }}>
      <Serif style={{ gridArea: "3 / 1 / 4 / 2" }} orientation="hbl" />
      <Strok style={{ gridArea: "3 / 2 / 4 / 3" }} />
      <Serif style={{ gridArea: "3 / 3 / 4 / 4" }} orientation="hbr" />
      <Round style={{ gridArea: "1 / 2 / 3 / 5" }} orientation="tl" $strokex="var(--s)" $strokey="var(--s)" />
      <Strok style={{ gridArea: "1 / 5 / 4 / 6" }} />
      <Round style={{ gridArea: "1 / 6 / 3 / 8", marginLeft: "calc(-1 * var(--s))" }} orientation="tl" $strokex="var(--s)" $strokey="var(--s)" />
      <Strok style={{ gridArea: "1 / 8 / 4 / 9" }} />
      <Strok style={{ gridArea: "3 / 7 / 4 / 8" }} $flatserif="b" />
      <Strok style={{ gridArea: "3 / 9 / 4 / 10" }} $flatserif="b" />
    </BasicLetter>
  )
}

const LetterN = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--l) var(--m) 1fr var(--m) var(--s) var(--m)", gridTemplateRows: "var(--l) 1fr var(--l)", flex: "0.7" }}>
      <Serif style={{ gridArea: "1 / 1 / 2 / 2" }} orientation="htl" />
      <Strok style={{ gridArea: "1 / 2 / 4 / 3" }} />
      <Serif style={{ gridArea: "3 / 1 / 4 / 2" }} orientation="hbl" />
      <Serif style={{ gridArea: "3 / 3 / 4 / 4" }} orientation="hbr" />
      <Round style={{ gridArea: "1 / 3 / 4 / 7" }} orientation="tr" $strokex="var(--s)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "1 / 6 / 4 / 7" }} />
      <Serif style={{ gridArea: "1 / 7 / 2 / 8" }} orientation="htr" />
    </BasicLetter>
  )
}

const LetterO = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "var(--s) 1fr 1fr var(--s)", flex: "0.7" }} $offsety={true}>
      <Round style={{ gridArea: "1 / 1 / 3 / 2" }} orientation="tl" $strokex="var(--l)" $strokey="var(--s)" $square={true} $thickerx={true} />
      <Strok style={{ gridArea: "1 / 2 / 2 / 3" }} />
      <Round style={{ gridArea: "1 / 3 / 3 / 4" }} orientation="tr" $strokex="var(--l)" $strokey="var(--s)" $square={true} $thickerx={true} />
      <Round style={{ gridArea: "3 / 1 / 5 / 2" }} orientation="bl" $strokex="var(--l)" $strokey="var(--s)" $square={true} $thickerx={true} />
      <Round style={{ gridArea: "3 / 2 / 5 / 4" }} orientation="br" $strokex="var(--l)" $strokey="var(--s)" $square={true} $thickerx={true} />
    </BasicLetter>
  )
}

const LetterP = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--l) var(--m) 1fr var(--m) var(--l) 0.2fr", gridTemplateRows: "var(--s) 1fr 1fr var(--s) 1fr var(--l)", flex: "0.75", marginRight: "-1%" }}>
      <Strok style={{ gridArea: "1 / 1 / 2 / 2" }} />
      <Strok style={{ gridArea: "1 / 2 / 7 / 3" }} />
      <Strok style={{ gridArea: "6 / 1 / 7 / 2" }} $flatserif="b" />
      <Strok style={{ gridArea: "6 / 3 / 7 / 4" }} $flatserif="b" />
      <Round style={{ gridArea: "1 / 3 / 3 / 7" }} orientation="tr" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Round style={{ gridArea: "3 / 3 / 5 / 7" }} orientation="br" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
    </BasicLetter>
  )
}

const LetterR = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "0.2fr var(--l) 0.2fr 1fr var(--m) var(--l) 0.2fr", gridTemplateRows: "var(--s) 1fr 1fr var(--s) 1fr var(--l)", flex: "0.8" }}>
      <Strok style={{ gridArea: "1 / 1 / 2 / 2" }} />
      <Strok style={{ gridArea: "1 / 2 / 7 / 3" }} />
      <Strok style={{ gridArea: "6 / 1 / 7 / 2" }} $flatserif="b" />
      <Strok style={{ gridArea: "6 / 3 / 7 / 4" }} $flatserif="b" />
      <Round style={{ gridArea: "1 / 3 / 3 / 7" }} orientation="tr" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Round style={{ gridArea: "3 / 3 / 5 / 7" }} orientation="br" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Round style={{ gridArea: "4 / 3 / 7 / 8" }} orientation="tr" $strokex="var(--s)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "6 / 7 / 7 / 8" }} $flatserif="b" />
    </BasicLetter>
  )
}

const LetterS = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--l) var(--m) 1fr 1fr var(--l) var(--m)", gridTemplateRows: "var(--s) 0.5fr 0.5fr var(--m) var(--l) 1fr var(--s) 1fr var(--s)", flex: "0.7" }} $offsety={true}>
      <Round style={{ gridArea: "1 / 1 / 3 / 3" }} orientation="tl" $strokex="var(--s)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "1 / 3 / 2 / 6" }} />
      <Serif style={{ gridArea: "2 / 5 / 3 / 6" }} orientation="vtr"/>
      <Round style={{ gridArea: "3 / 1 / 6 / 4" }} orientation="bl" $strokex="var(--s)" $strokey="var(--l)" $square={true} />
      <Round style={{ gridArea: "5 / 4 / 7 / 7" }} orientation="tr" $strokex="var(--s)" $strokey="var(--l)" $square={true} $thickerx={true} />
      <Round style={{ gridArea: "7 / 4 / 10 / 7" }} orientation="br" $strokex="var(--s)" $strokey="var(--s)" $square={true} $thickerx={true} />
      <Round style={{ gridArea: "7 / 1 / 10 / 4" }} orientation="bl" $strokex="var(--l)" $strokey="var(--s)" $square={true} $thickerx={true} />
      <Strok style={{ gridArea: "7 / 1 / 8 / 3" }} />
    </BasicLetter>
  )
}

const LetterT = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--l) 1fr 0.5fr var(--l) 0.5fr 1fr var(--l)", gridTemplateRows: "var(--s) var(--m) 1fr var(--s)", flex: "0.7", marginLeft: "-1%" }}>
      <Strok style={{ gridArea: "1 / 1 / 2 / 8" }} />
      <Strok style={{ gridArea: "2 / 4 / 5 / 5" }} />
      <Serif style={{ gridArea: "2 / 1 / 3 / 2" }} orientation="vtl" />
      <Serif style={{ gridArea: "2 / 7 / 3 / 8" }} orientation="vtr" />
      <Strok style={{ gridArea: "4 / 3 / 5 / 6" }} />
    </BasicLetter>
  )
}

const LetterU = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--l) var(--m) 0.2fr 1fr var(--m) var(--s) var(--m)", gridTemplateRows: "var(--l) 1fr 1fr var(--s)", flex: "0.8" }} $offsety={true}>
      <Strok style={{ gridArea: "1 / 2 / 2 / 3" }} />
      <Strok style={{ gridArea: "1 / 7 / 2 / 8" }} />
      <Round style={{ gridArea: "2 / 2 / 5 / 5" }} orientation="bl" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Round style={{ gridArea: "2 / 5 / 5 / 8" }} orientation="br" $strokex="var(--s)" $strokey="var(--s)" />
      <Strok style={{ gridArea: "1 / 1 / 2 / 2" }} $flatserif="t" />
      <Strok style={{ gridArea: "1 / 3 / 2 / 4" }} $flatserif="t" />
      <Serif style={{ gridArea: "1 / 6 / 2 / 7" }} orientation="htl" />
      <Serif style={{ gridArea: "1 / 8 / 2 / 9" }} orientation="htr" />
    </BasicLetter>
  )
}

const LetterV = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--l) var(--m) 1fr var(--m) var(--s) var(--m)", gridTemplateRows: "var(--l) 1fr 1fr var(--s)", flex: "0.8" }} $offsety={true}>
      <Strok style={{ gridArea: "1 / 2 / 5 / 3" }} />
      <Strok style={{ gridArea: "1 / 6 / 2 / 7" }} />
      <Round style={{ gridArea: "2 / 3 / 5 / 7" }} orientation="br" $strokex="var(--s)" $strokey="var(--s)" />
      <Strok style={{ gridArea: "1 / 1 / 2 / 2" }} $flatserif="t" />
      <Strok style={{ gridArea: "1 / 3 / 2 / 4" }} $flatserif="t" />
      <Serif style={{ gridArea: "1 / 5 / 2 / 6" }} orientation="htl" />
      <Serif style={{ gridArea: "1 / 7 / 2 / 8" }} orientation="htr" />
    </BasicLetter>
  )
}

const LetterY = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--s) var(--m) 1fr var(--m) var(--l) var(--m)", gridTemplateRows: "var(--l) 1.3fr 1fr", flex: "0.7"}} $offsety={true}>
      <Round style={{ gridArea: "2 / 2 / 3 / 6" }} orientation="bl" $strokex="var(--s)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "1 / 2 / 2 / 3" }} />
      <Round style={{ gridArea: "2 / 4 / 4 / 7" }} orientation="br" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "1 / 6 / 2 / 7" }} />
      <Serif style={{ gridArea: "1 / 1 / 2 / 2" }} orientation="htl" />
      <Serif style={{ gridArea: "1 / 3 / 2 / 4" }} orientation="htr" />
      <Strok style={{ gridArea: "1 / 5 / 2 / 6" }} $flatserif="t" />
      <Strok style={{ gridArea: "1 / 7 / 2 / 8" }} $flatserif="t" />
    </BasicLetter>
  )
}

const LetterZ = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) 1fr var(--m) var(--m)", gridTemplateRows: "var(--s) var(--l) 1fr var(--l) var(--s)", flex: "0.75"}}>
      <Strok style={{ gridArea: "1 / 2 / 2 / 4" }} />
      <Serif style={{ gridArea: "2 / 2 / 3 / 3" }} orientation="vtl" />
      <Round style={{ gridArea: "1 / 1 / 5 / 4" }} orientation="tl" $strokex="var(--l)" $strokey="var(--s)" />
      <Strok style={{ gridArea: "5 / 1 / 6 / 5" }} />
      <Serif style={{ gridArea: "4 / 3 / 5 / 4" }} orientation="vbr" />
    </BasicLetter>
  )
}

const Number1 = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--m) var(--l) var(--m)", gridTemplateRows: "var(--l) 1fr var(--s)", flex: "0.35"}}>
      <Strok style={{ gridArea: "1 / 2 / 3 / 3" }} />
      <Strok style={{ gridArea: "3 / 1 / 4 / 4" }} />
      <Serif style={{ gridArea: "1 / 1 / 2 / 2" }} orientation="hbl" />
    </BasicLetter>
  )
}

const Number2 = () => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--l) var(--m) 1fr 1fr var(--m) var(--l) var(--s)", gridTemplateRows: "var(--s) 1fr var(--l) var(--l) 1fr var(--s) 1fr var(--m) var(--l)", flex: "0.7"}}>
      <Round style={{ gridArea: "1 / 1 / 4 / 4" }} orientation="tl" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "4 / 1 / 5 / 2" }} />
      <Serif style={{ gridArea: "4 / 2 / 5 / 3" }} orientation="hbr" />
      <Round style={{ gridArea: "1 / 4 / 4 / 8" }} orientation="tr" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Round style={{ gridArea: "4 / 8 / 7 / 4" }} orientation="br" $strokex="var(--l)" $strokey="var(--s)" $square={true} />
      <Round style={{ gridArea: "6 / 1 / 9 / 4" }} orientation="tl" $strokex="var(--s)" $strokey="var(--s)" $square={true} />
      <Strok style={{ gridArea: "9 / 1 / 10 / 8" }} />
      <Strok style={{ gridArea: "8 / 7 / 9 / 8" }} />
    </BasicLetter>
  )
}

const Space = ({$style}) => {
  return (
    <BasicLetter style={{ flex: "0.25", ...$style }} />
  )
}

const Point = ({$style, $star}) => {
  return (
    <BasicLetter style={{ gridTemplateColumns: "var(--l) var(--s) var(--l)", gridTemplateRows: "1fr var(--l) var(--l)", flex: "0.2", ...$style}}>
      {$star ? 
        <>
          <Serif style={{ gridArea: "2 / 1 / 3 / 2" }} orientation="hbl" />
          <Strok style={{ gridArea: "2 / 2 / 4 / 3"}} />
          <Serif style={{ gridArea: "2 / 3 / 3 / 4" }} orientation="hbr" />
          <Serif style={{ gridArea: "3 / 1 / 4 / 2" }} orientation="htl" />
          <Serif style={{ gridArea: "3 / 3 / 4 / 4" }} orientation="htr" />
        </> : <>
          <Strok style={{ gridArea: "3 / 1 / 4 / 2" }} />
        </>
      }
      
    </BasicLetter>
  )
}

function App() {
  return (
    <section id="main">
      <div class="sub-container">
        <LetterA />
        <LetterC />
      </div>
      <div class="sub-container">
        <LetterD />
        <LetterE />
        <LetterG />
        <LetterH />
        <LetterI />
      </div>
      <div class="sub-container">
        <LetterL />
        <LetterM />
        <LetterN />
        <LetterO />
        <LetterP />
        <LetterR />
        <LetterS />
      </div>
      <div class="sub-container">
        <LetterT />
        <LetterU />
        <LetterV />
        <LetterY />
        <LetterZ />
      </div>
    </section>
  )
}

export default App
