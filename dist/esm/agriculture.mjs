export const name="agriculture";
export const id="dl_18f6bbc4b1ce6c9a85b6";
export const url=new URL("../icons/agriculture.svg?v=28630973cffb2acfe66b8d9e540b0a654235493d5bf40a40ef218bc4e1f154f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
