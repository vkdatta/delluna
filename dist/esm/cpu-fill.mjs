export const name="cpu-fill";
export const id="dl_bd2c0dad604e40cc9672";
export const url=new URL("../icons/cpu-fill.svg?v=03265526233e4f07528aee24d2dee2b0a70e9c080c7cc22b9066486fe62c4b10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
