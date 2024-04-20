# TPO shadcn problemi

User
npx shadcn-ui@latest add accordion
Configuration is missing. Please run init to create a components.json file.

ChatGPT
It seems like you're trying to add an accordion component using shadcn-ui. The error message suggests that you need to run an initialization command to set up the configuration before adding the accordion component.

You should try running npx shadcn-ui@latest init first to create the necessary components.json file. Once that's done, you can proceed to add the accordion component using npx shadcn-ui@latest add accordion. This will ensure that the configuration is properly set up before adding the component.




                                           

Error: Tailwind CSS is not installed. Visit https://tailwindcss.com/docs/installation to get started.
    at $e (file:///home/matevzvidovic/.npm/_npx/125ee17d583c4e03/node_modules/shadcn-ui/dist/index.js:3:7112)

Node.js v20.12.2


Tu:
https://tailwindcss.com/docs/installation
sem potem samo prvi korak naredil.



npx shadcn-ui@latest init
Failed to load jsconfig.json. Couldn't find tsconfig.json

Sem v glavno mapo (frontend) samo pač naredil jsconfig.json



npx shadcn-ui@latest init
/home/matevzvidovic/Desktop/dragonhack2024/frontend/jsconfig.json is malformed JSON5: invalid end of input at 1:1


Noter sem dal:
{

}
In potem je init delal. Po smiselnosti sem izplonil te njihove fielde.

Potem
npx shadcn-ui@latest add accordion
To že izpolni ta tailwind.config...whatever. Pa da ti v package.json. Pa naloži ti to kodo, ki je prikazana na accordion strani.

Potem ti to preprosto importaš in uporabiš, kot je napisano pod usage na accordion strani.(tisti code zgoraj oni uporabljajo, ti nič)
https://ui.shadcn.com/docs/components/accordion