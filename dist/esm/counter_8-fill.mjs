export const name="counter_8-fill";
export const id="dl_c9c048d63c312138aa7a";
export const url=new URL("../icons/counter_8-fill.svg?v=2f9c487d800a2a02027ed36e23b9917a749a8be0a8e6ba47a1bfb16b3019eb6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
