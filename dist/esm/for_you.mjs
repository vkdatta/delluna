export const name="for_you";
export const id="dl_ce7f48413be969082a85";
export const url=new URL("../icons/for_you.svg?v=d07ab185acf22e27f4e0561257a20f544ce6850a70f498f3aaf37a0d8d06facc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
