import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem should', () => {

    const title = 'Angello';
    const url = 'http://localhost/url';

    test('debe hacer match con el snpshot', () => {
       const { container } = render(<GifItem title={title} url={url} />);
       expect( container ).toMatchSnapshot();
    });
    
    test('debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( title );
        
    });

    test('debe de mostrar el titulo el componente', () => {
        render(<GifItem title={title} url={url} />);
         expect( screen.getByText(title) ).toBeTruthy();
    })

})