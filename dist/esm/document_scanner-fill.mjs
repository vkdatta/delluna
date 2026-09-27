export const name="document_scanner-fill";
export const id="dl_f2e0f3788ecd57a81c30";
export const url=new URL("../icons/document_scanner-fill.svg?v=801c46ad56445823bd004382cad8d345a70095e20de5543c1754a921aeea460d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
