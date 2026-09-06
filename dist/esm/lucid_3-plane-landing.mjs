export const name="lucid_3-plane-landing";
export const id="dl_3002827e51264fa384ac";
export const url=new URL("../icons/lucid_3-plane-landing.svg?v=f6f5f2d023a12e076ecc68ad0464f7b03daff726dbbc9228e67d2cdd659688e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
