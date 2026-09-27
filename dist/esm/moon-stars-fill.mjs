export const name="moon-stars-fill";
export const id="dl_fae15bbdbf3b49128d47";
export const url=new URL("../icons/moon-stars-fill.svg?v=0763ab5a2e30f13a2d15951328a7013f37f1c8c3ac60c19f9742c99fdd960e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
