export const name="person_2-fill";
export const id="dl_bedf6f6d1cb4062fffc2";
export const url=new URL("../icons/person_2-fill.svg?v=3a9b8e4f30130528c5244c7993937f8d65ecc893642bf369bdc5e4828f1368c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
