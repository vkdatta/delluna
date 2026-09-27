export const name="lucid_2-lamp-floor";
export const id="dl_eb7983fed44e40ddb2c4";
export const url=new URL("../icons/lucid_2-lamp-floor.svg?v=c4700af37e17b94b96929ec485852fd17868f2d0a5606ce3ed51c032dcc19648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
