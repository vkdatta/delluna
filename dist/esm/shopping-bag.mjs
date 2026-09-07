export const name="shopping-bag";
export const id="dl_493209fcbdd74b248518";
export const url=new URL("../icons/S/shopping-bag.svg?v=cd1027fea55e6d35ac9a3f9b6c657fdd9b56775609d925ae3a903fcf369c68f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
