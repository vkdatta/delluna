export const name="lucid_2-copy-slash";
export const id="dl_b3c582f90c5849a2a14b";
export const url=new URL("../icons/lucid_2-copy-slash.svg?v=ac027ce65cd9fa9325c190b2b8a40f449fd88ef93dcdf9c6ab6e5ee8955da6a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
