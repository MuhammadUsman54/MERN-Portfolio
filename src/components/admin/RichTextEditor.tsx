type RichTextEditorProps = {
  label: string;
  name: string;
};

export function RichTextEditor({ label, name }: RichTextEditorProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-white/70">{label}</p>
      <div
        className="min-h-[160px] rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
        contentEditable
        suppressContentEditableWarning
        data-name={name}
      >
        Start writing the project story here...
      </div>
      <p className="text-xs text-white/50">
        Rich text editor placeholder. Integrate a full editor (TipTap, Slate, or
        Lexical) for production.
      </p>
    </div>
  );
}
