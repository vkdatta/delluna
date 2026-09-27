export const name="shuffle-light";
export const id="dl_78db1e0479ad45b8439e";
export const url=new URL("../icons/shuffle-light.svg?v=20960bf4ca34a1651a1ea69408d06232e891a7e039d5706aba3cd691d124d9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
