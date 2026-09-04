export const name="dev-to-logo";
export const id="dl_f8892c076a0d421a9d7b";
export const url=new URL("../../icons/D/dev-to-logo.svg?v=4e05cad7b8b5ad264d64579e697e7f1e3601c85efcff4c4e88523073cfc5d6de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
