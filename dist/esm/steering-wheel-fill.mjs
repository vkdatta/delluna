export const name="steering-wheel-fill";
export const id="dl_bbeca5fa79379fa58247";
export const url=new URL("../icons/steering-wheel-fill.svg?v=548e1d247747ba9b099c2121dbe58790508bedc6fa847403f0eb9668e464f6b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
