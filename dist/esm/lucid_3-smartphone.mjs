export const name="lucid_3-smartphone";
export const id="dl_fddf5fdb7f9b4a028330";
export const url=new URL("../icons/lucid_3-smartphone.svg?v=92d16340ec58e87287259fbdb28275d812613a4593c91494d0a424721c9e7f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
