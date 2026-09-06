export const name="lucid_3-pipette";
export const id="dl_16e9aa996e284e8a88c8";
export const url=new URL("../icons/lucid_3-pipette.svg?v=93a0b7760f7f538d8b025c058a0448c377dfaa7638137245e4fe87ceece04545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
