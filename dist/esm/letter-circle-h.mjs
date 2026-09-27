export const name="letter-circle-h";
export const id="dl_bfb25cc51be649ffa49d";
export const url=new URL("../icons/letter-circle-h.svg?v=39669dd7d07aab19746b38b452c77dce813a4767923f195159eb0ab512227616",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
