export const name="blueprint-fill";
export const id="dl_cf5824dc171849c1a555";
export const url=new URL("../icons/blueprint-fill.svg?v=f4ccd0407ff554912ba6b41077f49f8f34b8975d595fbee9ff00edd52bcf6d06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
