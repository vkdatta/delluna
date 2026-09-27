export const name="sweep-fill";
export const id="dl_091dfae86bd38e9a1633";
export const url=new URL("../icons/sweep-fill.svg?v=265aade4700fa709e2af8155d37e532e426cb97255bc8179c98d8211d0c9d3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
