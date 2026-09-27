export const name="couch";
export const id="dl_a3f4d6e264794851ac23";
export const url=new URL("../icons/couch.svg?v=004b98be717a72abc6dfc0fca076e4c99fdc4dc8b5d90d92c9d17344630a9356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
