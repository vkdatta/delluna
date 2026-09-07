export const name="open_in_full";
export const id="dl_c231d18a744acd925d60";
export const url=new URL("../icons/open_in_full.svg?v=3629e6e77290ef4d8c53e8b2646c4ede4a90875219130baeb1ff42c1fed0ba78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
