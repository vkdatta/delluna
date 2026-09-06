export const name="dice-four-fill";
export const id="dl_c802c9cffa374e149cc2";
export const url=new URL("../icons/dice-four-fill.svg?v=4e05f76eb23900464fb36fcedc8eaa58336f0bf7a0e92e7146c2939ae3851887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
