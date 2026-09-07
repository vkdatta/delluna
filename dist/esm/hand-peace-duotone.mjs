export const name="hand-peace-duotone";
export const id="dl_f6bd647b654a42beb541";
export const url=new URL("../icons/hand-peace-duotone.svg?v=54864627292206219282136655f075235528e039e00ea99f1dcbccddf4a57533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
