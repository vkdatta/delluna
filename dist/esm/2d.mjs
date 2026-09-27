export const name="2d";
export const id="dl_8962636e3ba52aab6805";
export const url=new URL("../icons/2d.svg?v=3ce39f77754a37f3f2765c618bbe43045344931b36be27198ef758421653e909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
