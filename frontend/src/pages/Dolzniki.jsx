
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

const Dolzniki = () => {
    return (
      <div>
      <h1>Blog Articles</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };
  
  export default Dolzniki;
  