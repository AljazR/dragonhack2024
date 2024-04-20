# TPO react

Že narejene komponente, samo za kopirat:
https://ui.shadcn.com/

Uporabi ta ukaz npx create-react-app yadayadayada.
Saj se nekaj da brez tega, ampak basically moraš iste stvari naredit.
Isto moraš imeti public in src folder, pa potem pač uporabljaš webpackage al kaj je že, da ti bundlea html, css, js in potem naredi eno svojo bundle.js datoteko, ki je potem uporabna.
Ker pač, da react lahko laufa in keepa state vsega in to, to potem ne more bit običen script import, kot lahko z običajnim javascriptom.
Ker ni tega importanja, moraš pa potem runnanju tega z backend kodo to nekaj posebi naredit, o čemer govori naslednji link:
https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project
Manj podrobno in hitreje tukaj: https://www.geeksforgeeks.org/how-to-connect-reactjs-with-flask-api/
https://medium.com/@choihalim/render-how-to-deploy-a-react-flask-application-31f9528b624e



https://www.w3schools.com/REACT/default.asp

https://stackoverflow.com/questions/46169472/reactjs-js-vs-jsx

https://stackoverflow.com/questions/41838728/does-react-really-need-nodejs-on-the-frontend-env

https://www.freecodecamp.org/news/how-to-install-node-js-on-ubuntu/


Kako bi react brez create-react-app:
https://stackoverflow.com/questions/44610377/how-to-reference-reactjs-in-html-file
https://medium.com/@claude.ando/setting-up-a-react-project-without-create-react-app-6ff7fea9ca51


Torej, node je fajn tudi za client side. Ni fora, da ga rabiš potem za serverside uporabljat.
Je pa node fajn pri uporabi reacta, ker če prav razumem, ti neke stvari olajša.


Imaš ta 
 npx create-react-app <my-react-app-name>
ki ti ustvari zadeve. Potem samo daš npm start in se ti na localhost:3000 odpre tvoj index.html (ki je tu v mapi "public").

Ampak pomoje lahko tudi samo ustvariš svojo mapo, narediš npm init, potem pa uporabiš npm da doaš react in node.
Pa potem npm install.
Pa ne vem a rabiš sam dodat dependencies ali ti jih kar on sam. 
Ta način me zanima, ker mi bo potem bolj jasno in grounded vse skupaj. To je next step.

To narediš tako:
- narediš mapo
- npm init (te vodi in naredi package.json)
- npm install (ustvari package-lock.json)
- npm install react   (pa pač karkoli še hočeš) (to spremeni package, package-lock, in ustvari mapo node_modules
Nodea pa ni treba installat, ker to je že del npm-a.

npm start je fajn komanda.
https://www.w3schools.com/REACT/react_getstarted.asp
Ampak takole lepo dela samo če si naredil z:
 npx create-react-app <my-react-app-name>
ker takrat ima potem v node_modules mapo react_scripts ki ti točno to dela.
Vseeno pa se jo lahko uporablja:
https://docs.npmjs.com/cli/v7/commands/npm-start
Samo v scripts pač daš "start": "ukaz ki naj to pomeni, ali ig celo več ukazov"

Mogoče bi celo lahko samo naredil npm install react-scripts
Ampak potem moraš dati index.html v mapo public, pa index.js v src (kot je v create-react-app načinu). Pa še ni mi do konca uspelo, bi moral morda še nekatere druge react-neki installat.
"start": "react-scripts start",


Osvežitev na kako sploh poganjat zadeve:
V html-ju ti importaš javascript v <script> in css v <link>.

Načeloma nočeš naredit statičnega patha tu noter, ker pač to na tvoji mašini deluje, zato imaš drugačne možnosti.
- V create-react-app je ena možnost nek:
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />, kjer je %PUBLIC_URL% zamenjan z urljem za /public kjer so potem te stvari not. Ampak meni to ne pomaga.
- Je pa tudi možnost, da nekaj uporabiš server kodo, ki ta index.html sploh publisha in recimo pri uporabi Python Flaska imaš neko možnost, da v index.html narediš:
<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='loginRegistrationSytles.css') }}">
Ampak tole pomoje velja samo če v flasku uporabiš render_template(), kot je tu:
https://www.geeksforgeeks.org/flask-rendering-templates/





React component se ne rerendera samo takrat, ko se mu spremenijo props:
ChatGPT:
but why would it rerender if the props didnt change?:
https://www.w3schools.com/REACT/react_memo.asp

In React, re-renders can occur for various reasons, not just when props change. One common reason for re-renders is changes in the component's state. In your example, although the todos prop passed to the Todos component remains the same, there is another state variable count in the App component that changes when the button is clicked. Since the Todos component is rendered within the App component, any state changes in the App component can trigger a re-render of the Todos component, even if its props remain unchanged.

In your code, every time the button is clicked, the count state in the App component is updated, triggering a re-render of the App component and consequently the Todos component, even though the todos prop remains the same.

To optimize performance and avoid unnecessary re-renders, you can use React.memo or useMemo to memoize the Todos component, ensuring that it only re-renders when its props actually change. However, keep in mind that premature optimization can sometimes lead to more complex code and reduced readability, so it's essential to balance performance considerations with code simplicity and maintainability.


Object kot state:
js object so samo pač object.neki nabrani skupaj (ni nek actual class instance, ampak skoraj bolj kot en dict).
Če ga imamo za state in hočemo dodat recimo colour, ga ne moremo samo nastavit, ker bi izgubil vse, kar smo že prej objectu dodali. Zato:
setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
(Očitno ta setter metoda pri useState kot argument lahko poda previousState).
Te ... so pa js spread metoda (kot * v pythonu ig).










# TPO Figma

https://www.youtube.com/watch?v=QFz_2s__Vmw

https://www.reddit.com/r/FigmaDesign/comments/15e2lub/beginner_how_to_get_code_out_of_figma/
https://designmodo.com/figma-to-html/

https://www.youtube.com/watch?v=gwiX0oASlEw
https://forum.figma.com/t/i-can-not-find-the-constraints-part-on-right-side-of-the-screen/669/8

https://www.youtube.com/watch?v=jk1T0CdLxwU


Mogoče bi figmo lahko uporabla samo za postavitev strani pa za splošne barve.
Ker postavitev strani je pain in the ass za codeat, tuki loh pa samo nariševa, pa pol svoje elemente dava kot subelement teh kvadratov k sva jih v figmi designala.
Zna bit zelo fajn za naredit responsive site. Potem samo namesto teh imageov, ki ti jih avtomatsko flikne not Anima, daš svoje kokponente, ki pa naj napolnejo ta parent frame. In si zmagal.
Edino problem bi lahko bil v proporcih, sploh ko dodajaš kakšno sliko, ali pa delno tudi pri text sizeu.



Okej, situacija je, da figma nima nečesa za direktno dat v kodo.
Lahko desno zgoraj (desno od Share) klikneš in te iz Designer da v Developer mode.
Tu ti figma že sama za komponente potem servira osnovno CSS kodo, in zloadaš lahko stvari kot slike (recimo kot svg, kar je nice).

Imaš pa še ta orodja, ki pa ti lahko dajo prav HTML ali react style html kodo, pa tudi css.
Večina te hoče povlečt na njihovo stan, kjer imaš potem projekt - tam bi ga lahko še dodeloval, ampak samo 1 projekt je zastonj, pa še učit bi se moral še njihovih zadev.
Ampak ko se prijaviš in greš čez ta bullshit, potem ti ubistvu jih veliko že v Figmi da kodo, nekateri te pa vržejo na svojo stran pa imaš tam direktno kodo. In potem to actually ni tak problem.

Še vedno pa je to samo neka aproksimacija kode. ne morejo vedet, kako bi morala koda v resnici izgledat. Zato je lahko pain in the ass potem to kodo prilagodit in dodelat, da actually dela zate.
To si lahko potem zelo olajšaš s tem, da v Figmi že dobro poimenuješ zadeve.
Pa s tem ko se naučiš, kako en ta converter razmišlja, potem si tudi na veliko boljšem.



Anima se zdi surprisingly v redu:
- v figmi ti naredi njeno kodo. Lahko pa tudi odpreš v njenem playgroundu.
- Zdi se kot trenutni zmagovalec. Lahko pa si še pogledava.

Overlay je delal dokaj solidno.
Ampak moraš nekaj zelo pazit, da označiš stvari kot komponente.
Don’t forget, clean code means
- No duplicate layers name
- Every state has clean layer names
- Your layout is good (Tips : use Auto-Layout)

Figma to code:
- pokaže se v figmi
- dokaj omejen
- nima CSSja

Builder.io tudi ok:
Odpre ti svojo spletno stran. Tam nek AI generation kode naredi. Lahko skopiraš.
Ampak se zdi skop, pa ne predober. Pa for some reason mi kot image naredi zadevo.

pxCode potrebuje da dam Chrome za default, kar ne bom

https://www.youtube.com/watch?v=wIuVvCuiJhU

https://www.youtube.com/watch?v=IbW2bS7quPw
https://www.youtube.com/watch?v=kxW62eMsw0k