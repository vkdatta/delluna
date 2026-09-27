export const name="shopping-bag-open-light";
export const id="dl_bb6c57ace9c06f113725";
export const url=new URL("../icons/shopping-bag-open-light.svg?v=0e25590fe275c37bd9107d9d0892ee2db6688ae58545e16c1bc3524d9f414477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
