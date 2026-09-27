export const name="lucid_2-corner-right-down";
export const id="dl_fc6e11c02e4d4141adeb";
export const url=new URL("../icons/lucid_2-corner-right-down.svg?v=a6b7cfeb978602f32aa9727ccb1fb7d6fe411ad9aea92f774a643118ee49f746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
