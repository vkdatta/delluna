export const name="codesandbox-logo";
export const id="dl_f63a3dadc9c64140b6af";
export const url=new URL("../../icons/C/codesandbox-logo.svg?v=3a06928511ee99c38c26cdd3eb303addd560480db4b23940173a6ca75c5cd529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
