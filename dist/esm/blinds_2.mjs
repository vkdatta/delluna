export const name="blinds_2";
export const id="dl_c937b6373b8b48d656a2";
export const url=new URL("../icons/blinds_2.svg?v=0432dea789ff5dc423fe26cc05f9bdeff786ffd1ccccfffa60fea9be1f234a35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
