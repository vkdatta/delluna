export const name="contacts-fill";
export const id="dl_2374ccbd6ce6cfeabc27";
export const url=new URL("../icons/contacts-fill.svg?v=d8817aba36e8ae14713dbad4e591cd32cae50ac2b29423d3e66bb168d2e68a78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
