const flexifyContainer = document.body;

const handleClass = (element, cls) => {
    const [prefix, value] = cls.split('-');

    // background-color
    if (prefix === 'bg') {
        element.style.setProperty('background-color', value);
    }
    // color
    if (prefix === 'text') {
        element.style.setProperty('color', value);
    }
    // padding
    {
        if (prefix === 'p') {
            element.style.setProperty('padding', `${value}px`);
        }
        if (prefix === 'px') {
            element.style.setProperty('padding-left', `${value}px`);
            element.style.setProperty('padding-right', `${value}px`);
        }
        if (prefix === 'py') {
            element.style.setProperty('padding-top', `${value}px`);
            element.style.setProperty('padding-bottom', `${value}px`);
        }
        if (prefix === 'pt') {
            element.style.setProperty('padding-top', `${value}px`);
        }
        if (prefix === 'pb') {
            element.style.setProperty('padding-bottom', `${value}px`);
        }
        if (prefix === 'pr') {
            element.style.setProperty('padding-right', `${value}px`);
        }
        if (prefix === 'pl') {
            element.style.setProperty('padding-left', `${value}px`);
        }
    }
    // margin
    {
        if (prefix === 'm') {
            element.style.setProperty('margin', `${value}px`);
        }
        if (prefix === 'mx') {
            element.style.setProperty('margin-left', `${value}px`);
            element.style.setProperty('margin-right', `${value}px`);
        }
        if (prefix === 'my') {
            element.style.setProperty('margin-top', `${value}px`);
            element.style.setProperty('margin-bottom', `${value}px`);
        }
        if (prefix === 'mt') {
            element.style.setProperty('margin-top', `${value}px`);
        }
        if (prefix === 'mb') {
            element.style.setProperty('margin-bottom', `${value}px`);
        }
        if (prefix === 'mr') {
            element.style.setProperty('margin-right', `${value}px`);
        }
        if (prefix === 'ml') {
            element.style.setProperty('margin-left', `${value}px`);
        }
    }
    //Width
    {
        if (prefix === 'w') {
            element.style.setProperty('width', `${value}px`);
        }
        if (prefix === 'w-full') {
            element.style.setProperty('width', '100%');
        }
        if (prefix === 'w-screen') {
            element.style.setProperty('width', '100vw');
        }
        if (prefix === 'w-fit') {
            element.style.setProperty('width', 'fit-content');
        }
    }
    //height
    {
        if (prefix === 'h') {
            element.style.setProperty('height', `${value}px`);
        }
        if (prefix === 'h-full') {
            element.style.setProperty('height', '100%');
        }
        if (prefix === 'h-screen') {
            element.style.setProperty('height', '100vh');
        }
        if (prefix === 'h-fit') {
            element.style.setProperty('height', 'fit-content');
        }
    }
    //Border Radius
    {
        if (prefix === 'rounded') {
            element.style.setProperty('border-radius', `${value}px`);
        }
        if (prefix === 'rounded-md') {
            element.style.setProperty('border-radius', '0.375rem');
        }
        if (prefix === 'rounded-lg') {
            element.style.setProperty('border-radius', '0.75rem');
        }
        if (prefix === 'rounded-xl') {
            element.style.setProperty('border-radius', '1.5rem');
        }
        if (prefix === 'rounded-2xl') {
            element.style.setProperty('border-radius', '2rem');
        }
        if (prefix === 'rounded-3xl') {
            element.style.setProperty('border-radius', '3rem');
        }
        if (prefix === 'rounded-full') {
            element.style.setProperty('border-radius', '100%');
        }
        if (prefix === 'rounded-none') {
            element.style.setProperty('border-radius', '0px');
        }
    }
    //Border
    {
        if (prefix === 'border') {
            element.style.setProperty('border', `${value}px solid`);
        }
        if (prefix === 'border-t') {
            element.style.setProperty('border-top', `${value}px solid`);
        }
        if (prefix === 'border-b') {
            element.style.setProperty('border-bottom', `${value}px solid`);
        }
        if (prefix === 'border-l') {
            element.style.setProperty('border-left', `${value}px solid`);
        }
        if (prefix === 'border-r') {
            element.style.setProperty('border-right', `${value}px solid`);
        }
        if (prefix === 'border-t-0') {
            element.style.setProperty('border-top', '0px solid');
        }
        if (prefix === 'border-b-0') {
            element.style.setProperty('border-bottom', '0px solid');
        }
        if (prefix === 'border-l-0') {
            element.style.setProperty('border-left', '0px solid');
        }
        if (prefix === 'border-r-0') {
            element.style.setProperty('border-right', '0px solid');
        }
        if (prefix === 'border-t-2') {
            element.style.setProperty('border-top', '2px solid');
        }
        if (prefix === 'border-b-2') {
            element.style.setProperty('border-bottom', '2px solid');
        }
        if (prefix === 'border-l-2') {
            element.style.setProperty('border-left', '2px solid');
        }
    }
    //font-size
    {
        if (prefix === 'text') {
            element.style.setProperty('font-size', `${value}px`);
        }
        if (prefix === 'text-xs') {
            element.style.setProperty('font-size', '0.75rem');
        }
        if (prefix === 'text-sm') {
            element.style.setProperty('font-size', '0.875rem');
        }
        if (prefix === 'text-base') {
            element.style.setProperty('font-size', '1rem');
        }
        if (prefix === 'text-lg') {
            element.style.setProperty('font-size', '1.125rem');
        }
        if (prefix === 'text-xl') {
            element.style.setProperty('font-size', '1.25rem');
        }
        if (prefix === 'text-2xl') {
            element.style.setProperty('font-size', '1.5rem');
        }
        if (prefix === 'text-3xl') {
            element.style.setProperty('font-size', '1.875rem');
        }
        if (prefix === 'text-4xl') {
            element.style.setProperty('font-size', '2.25rem');
        }
        if (prefix === 'text-5xl') {
            element.style.setProperty('font-size', '3rem');
        }
        if (prefix === 'text-6xl') {
            element.style.setProperty('font-size', '4rem');
        }
    }
    //font-weight
    {
        if (prefix === 'font') {
            element.style.setProperty('font-weight', value);
        }
        if (prefix === 'font-bold') {
            element.style.setProperty('font-weight', 'bold');
        }
        if (prefix === 'font-normal') {
            element.style.setProperty('font-weight', 'normal');
        }
        if (prefix === 'font-light') {
            element.style.setProperty('font-weight', 'light');
        }
        if (prefix === 'font-thin') {
            element.style.setProperty('font-weight', 'thin');
        }
        if (prefix === 'font-extrabold') {
            element.style.setProperty('font-weight', '800');
        }
        if (prefix === 'font-black') {
            element.style.setProperty('font-weight', '900');
        }
    }
    // display
    {
        if (prefix === 'hidden') {
            element.style.setProperty('display', 'none');
        }
        if (prefix === 'block') {
            element.style.setProperty('display', 'block');
        }
        if (prefix === 'inline') {
            element.style.setProperty('display', 'inline');
        }
        if (prefix === 'inline-block') {
            element.style.setProperty('display', 'inline-block');
        }
        if (prefix === 'flex') {
            element.style.setProperty('display', 'flex');
        }
        if (prefix === 'grid') {
            element.style.setProperty('display', 'grid');
        }
    }

    // justify-content
    {
        if (prefix === 'justify-normal') {
            element.style.setProperty('justify-content', 'normal');
        }
        if (prefix === 'justify-start') {
            element.style.setProperty('justify-content', 'start');
        }
        if (prefix === 'justify-end') {
            element.style.setProperty('justify-content', 'end');
        }
        if (prefix === 'justify-center') {
            element.style.setProperty('justify-content', 'center');
        }
        if (prefix === 'justify-between') {
            element.style.setProperty('justify-content', 'space-between');
        }
        if (prefix === 'justify-around') {
            element.style.setProperty('justify-content', 'space-around');
        }
        if (prefix === 'justify-evenly') {
            element.style.setProperty('justify-content', 'space-evenly');
        }
        if (prefix === 'justify-stretch') {
            element.style.setProperty('justify-content', 'stretch');
        }
    }

    // align-items
    {
        if (prefix === 'items-start') {
            element.style.setProperty('align-items', 'start');
        }
        if (prefix === 'items-end') {
            element.style.setProperty('align-items', 'end');
        }
        if (prefix === 'items-center') {
            element.style.setProperty('align-items', 'center');
        }
        if (prefix === 'items-baseline') {
            element.style.setProperty('align-items', 'baseline');
        }
        if (prefix === 'items-stretch') {
            element.style.setProperty('align-items', 'stretch');
        }
    }

    //gap
    {
        if (prefix === 'gap') {
            element.style.setProperty('gap', `${value}px`);
        }
        if (prefix === 'gap-x') {
            element.style.setProperty('column-gap', `${value}px`);
        }
        if (prefix === 'gap-y') {
            element.style.setProperty('row-gap', `${value}px`);
        }
    }


}



const handleElement = (element) => {
    const classes = element.className.split(' ');
    for (const cls of classes) {
        //background-color
        if (cls.startsWith('bg-')) {
            handleClass(element, cls);
        }

        // color
        if (cls.startsWith('text-')) {
            handleClass(element, cls);
        }
        // padding
        {
            if (cls.startsWith('p-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('px-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('py-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('pt-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('pb-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('pr-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('pl-')) {
                handleClass(element, cls);
            }
        }
        // margin
        {
            if (cls.startsWith('m-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('mx-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('my-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('mt-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('mb-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('mr-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('ml-')) {
                handleClass(element, cls);
            }

        }
        // Width
        {
            if (cls.startsWith('w-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('w-full')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('w-screen')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('w-fit')) {
                handleClass(element, cls);
            }
        }
        // Height
        {
            if (cls.startsWith('h-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('h-full')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('h-screen')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('h-fit')) {
                handleClass(element, cls);
            }
        }

        //Border Radius
        {
            if (cls.startsWith('rounded-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('rounded-md')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('rounded-lg')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('rounded-xl')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('rounded-2xl')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('rounded-3xl')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('rounded-full')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('rounded-none')) {
                handleClass(element, cls);
            }
        }
        //Border
        {
            if (cls.startsWith('border-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-t')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-b')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-l')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-r')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-t-0')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-b-0')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-l-0')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-r-0')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-t-2')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-b-2')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('border-l-2')) {
                handleClass(element, cls);
            }
        }
         //Border color
         {
            
         }

        //font-size
        {
            if (cls.startsWith('text-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-xs')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-sm')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-base')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-lg')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-xl')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-2xl')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-3xl')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-4xl')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-5xl')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('text-6xl')) {
                handleClass(element, cls);
            }
        }

        //font-weight
        {
            if (cls.startsWith('font-')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('font-bold')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('font-normal')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('font-light')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('font-thin')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('font-extrabold')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('font-black')) {
                handleClass(element, cls);
            }
        }
        // display
        {
            if (cls.startsWith('hidden')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('block')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('inline')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('inline-block')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('flex')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('grid')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('flex-')) {
                handleClass(element, cls);
            }
        }
        // justify-content
        {
            if (cls.startsWith('justify-normal')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('justify-start')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('justify-end')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('justify-center')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('justify-between')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('justify-around')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('justify-evenly')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('justify-stretch')) {
                handleClass(element, cls);
            }

        }
       // align-items
        {
            if (cls.startsWith('items-start')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('items-end')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('items-center')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('items-baseline')) {
                handleClass(element, cls);
            }
            if (cls.startsWith('items-stretch')) {
                handleClass(element, cls);
            }

    }
    //gap
    {
        if (cls.startsWith('gap-')) {
            handleClass(element, cls);
        }
        if (cls.startsWith('gap-x-')) {
            handleClass(element, cls);
        }
        if (cls.startsWith('gap-y-')) {
            handleClass(element, cls);
        }
    }
     


}
}

const handleElements = () => {
    const elements = flexifyContainer.querySelectorAll("*");
    elements.forEach(element => {
        handleElement(element)
    });
}

handleElements()