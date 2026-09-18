export const name="temple_buddhist-fill";
export const id="dl_5c89d282e6c24f04925c";
export const url=new URL("../icons/temple_buddhist-fill.svg?v=3bd83f11ed18cc469eefbb379909274bcfa2f2e9deb65062d14041634de215a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
