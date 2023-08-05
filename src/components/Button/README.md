Modo de uso do Button
<Button>Button</Button>

Quais props que aceita?

children: (text, icon)
size='100px' (se nao passar nada ele assume um valor padrão de 130px
disabled: boolean
onClick
styles: (classes do tailwind, caso precise fazer alguma personalização especifica)

Types:
children?: ReactNode;
size?: string;
disabled?: boolean;
onClick?: () => void;
styles?: string;

Exemplo de uso:
<Button size="200px" disabled={true} styles="mt-4" onClick={() => {function()}}>
<FiHeadphones />
Button
</Button>
