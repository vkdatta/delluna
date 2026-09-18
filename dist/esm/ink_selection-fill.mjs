export const name="ink_selection-fill";
export const id="dl_cadd02f3ab0d4655a83f";
export const url=new URL("../icons/I/ink_selection-fill.svg?v=18ec200ea6f8de4fc9f06b6b083512b98712f254e71d9782b79ee2f765894f60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
