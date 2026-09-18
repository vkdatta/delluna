export const name="person_3";
export const id="dl_5f48e3b800654a5db00b";
export const url=new URL("../icons/person_3.svg?v=11e521722a6af5ac052c7c997d52d8eb4e493740bdb6d62f658da6edc7ecfed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
