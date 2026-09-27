export const name="lucid_2-diamond-minus";
export const id="dl_2276d08c29a84eb1b762";
export const url=new URL("../icons/lucid_2-diamond-minus.svg?v=f08a955b322de66f699f1c0b65c1312f45daa9e745a2a22242effc0530f6c67e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
