export const name="stacks";
export const id="dl_d2d071a778ec4e3ab492";
export const url=new URL("../icons/S/stacks.svg?v=2d5b0b54ace7cf426ea2323a2c1fc6863757efc752a85d35745d83566a8a0a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
