export const name="lock_clock-fill";
export const id="dl_2d6ec75bffcb482d8d59";
export const url=new URL("../icons/L/lock_clock-fill.svg?v=8667aa6a66567ba9fb2d775cc78ebef11483eaaa7f30606c5b8279388588180d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
