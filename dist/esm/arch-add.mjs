export const name="arch-add";
export const id="dl_bdb42780b74aae5f869b";
export const url=new URL("../icons/arch-add.svg?v=431a22330d636f901e0593e90ee6abd3ba59066354dc6525be1107954bceda8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
