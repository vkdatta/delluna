export const name="heart_check";
export const id="dl_1643cdac9557c722974a";
export const url=new URL("../icons/heart_check.svg?v=768aced98c85f75c7a3820d0b6d2be528427050566087a672eaa6127bef87935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
