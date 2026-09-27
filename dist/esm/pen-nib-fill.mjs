export const name="pen-nib-fill";
export const id="dl_1bc351bae41b467097d5";
export const url=new URL("../icons/pen-nib-fill.svg?v=7314f8868c0df6eb533f798aae29b998e6c09f26ed8cd38c8bac9440b37e3874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
