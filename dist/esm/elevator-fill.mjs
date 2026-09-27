export const name="elevator-fill";
export const id="dl_e48ff6de2227ef28a767";
export const url=new URL("../icons/elevator-fill.svg?v=a4d0372fb174cb2ad4b6d4ec9a7f21719ae8e06507b52b9ec859df47fcc1bc38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
