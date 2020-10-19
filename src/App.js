import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Trains} path="/" exact />
        <Route component={Ubahn} path="/Ubahn" exact />
        <Route component={SBahn} path="/Sbahn" exact />
        <Route component={U6} path="/Ubahn/U6" />
        <Route component={U7} path="/Ubahn/U7" />
        <Route component={U8} path="/Ubahn/U8" />
        <Route component={S41} path="/Sbahn/S41" />
        <Route component={S1} path="/Sbahn/S1" />
        <Route component={S2} path="/Sbahn/S2" />


      </div>
    </Router>
  );
}

function Trains() {
  return (
    <div className="App">
      <h1>Trains in Berlin</h1>
      <p>
        There is Ubahn and there is Sbahn. According to studies, the Ubahn is prettier and better.
      </p>
      <Link to="/Ubahn">
        <p>Ubahn</p>
      </Link>
      <Link to="/Sbahn">
        <p>Sbahn</p>
      </Link>
    </div>
  );
}

function Ubahn() {
  return (
    <div className="App">
      <h1>Ubahn</h1>
      <p>
        The Berlin U-Bahn is the most extensive underground network in
        Germany.[1] In 2006, travel on the U-Bahn was equivalent to 122.2
        million km (76 million mi) of car journeys.[4]
      </p>
      <Link to="/Ubahn/U6">
        <p>U6</p>
      </Link>
      <Link to="/Ubahn/U7">
        <p>U7</p>
      </Link>
      <Link to="/Ubahn/U8">
        <p>U8</p>
      </Link>
    </div>
  );
}

function U6() {
  return (
    <div className="App">
      <h1>U6</h1>
      <p>
        U6 is a Berlin U-Bahn line, 19.9 km long line with 29 stations. It runs
        in a north-south direction from the Berlin locality of Tegel in the
        north via Friedrichstraße to Mariendorf, a locality in the southern part
        of the city. It is a so-called large profile line.
      </p>
      <img
        src={
          "https://www.bahnbilder.de/bilder/berlin-die-u6-nach-u-bahnhof-275185.jpg"
        }
      />
    </div>
  );
}

function U7(props) {
  console.log("props match", props.match);
  return (
    <div className="App">
      <h1>U7</h1>
      <p>
        The U7 is a rail line on the Berlin U-Bahn. It runs completely
        underground for a length of 31.8 kilometres through 40 stations and
        connects Spandau, via Neukölln, to Gropiusstadt and Rudow.
      </p>
      <img src={"https://i.ytimg.com/vi/mfEX0K-kb4k/maxresdefault.jpg"} />
    </div>
  );
}

function U8() {
  return (
    <div className="App">
      <h1>U8</h1>
      <p>
        U8 is a line on the Berlin U-Bahn. It has 24 stations and is 18.1 km
        long. The U8 is one of two north–south Berlin U-Bahn lines, and runs
        from Wittenau to Neukölln via Gesundbrunnen. The original proposal was
        for a suspended monorail like the Wuppertal Schwebebahn.
      </p>
      <img
        src={
          "https://www.tagesspiegel.de/images/u-bahn/20007532/2-format43.jpg"
        }
      />
    </div>
  );
}

function SBahn() {
  return (
    <div className="App">
      <h1>Sbahn</h1>
      <p>
      The Berlin S-Bahn is a rapid transit railway system in and around Berlin, the capital city of Germany. It has been in operation under this name since December 1930, having been previously called the special tariff area Berliner Stadt-, Ring- und Vorortbahnen.
      </p>
      <Link to="/Sbahn/S1">
        <p>S1</p>
      </Link>
      <Link to="/Sbahn/S2">
        <p>S2</p>
      </Link>
      <Link to="/Sbahn/S41">
        <p>S41 (Ring Bahn)</p>
      </Link>
    </div>
  );
}

function S1() {
  return (
    <div className="App">
      <h1>S1</h1>
      <p>
      The S1 is a line on the Berlin S-Bahn. It operates over: the Prussian Northern Railway, opened on 10 July 1877 and electrified in 1925, a short section of the Berlin-Szczecin railway
      </p>
      <img
        src={
          "https://www.bahnbilder.de/bilder/berlin-07112009-s1-nach-wannsee-351518.jpg"
        }
      />
    </div>
  );
}

function S2() {
  return (
    <div className="App">
      <h1>S2</h1>
      <p>
      S2 is a line on the Berlin S-Bahn.[1] It operates from Bernau to Blankenfelde      </p>
      <img
        src={
          "https://www.bahnbilder.de/bilder/berlin-02112008-s2-nach-bernau-241113.jpg"
        }
      />
    </div>
  );
}

function S41() {
  return (
    <div className="App">
      <h1>S41</h1>
      <p>
      The S41 is a ring line that's approximately 37 km in length and runs clockwise stopping at stations: Südkreuz, Westkreuz, Gesundbrunnen, Ostkreuz
</p>      <img
        src={
          "https://i.ytimg.com/vi/SdxN5jSxbX4/maxresdefault.jpg"
        }
      />
    </div>
  );
}

export default App;
