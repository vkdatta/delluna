export const name="vibrate-bold";
export const id="dl_98db83e172a748bf83b7";
export const url=new URL("../icons/V/vibrate-bold.svg?v=9619fbc1c4ebeb7e8fd4132c44dd6ffe99386793346da30d67e7f0692782b727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
