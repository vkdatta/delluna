export const name="seatbelt-bold";
export const id="dl_af03796012bb933dec65";
export const url=new URL("../icons/seatbelt-bold.svg?v=e0b959ee26954a7071fa86509135eb2715926e786d5ac7101bbe120ceab204c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
