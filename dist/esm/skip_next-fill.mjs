export const name="skip_next-fill";
export const id="dl_9c245eeb093db9074ab0";
export const url=new URL("../icons/skip_next-fill.svg?v=5fe60f58a416d7045b2ae12e5f9f5cdb301bbbc1735382926d47f1d475bf1183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
