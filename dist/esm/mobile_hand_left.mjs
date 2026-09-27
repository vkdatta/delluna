export const name="mobile_hand_left";
export const id="dl_e11f4abfa33cfe937139";
export const url=new URL("../icons/mobile_hand_left.svg?v=620935224be37fdc53817200f2d4e3160841accc8b7c1523ae423a2a06278256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
