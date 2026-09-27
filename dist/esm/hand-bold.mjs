export const name="hand-bold";
export const id="dl_033ee248b09d40b787d0";
export const url=new URL("../icons/hand-bold.svg?v=9be8f2b6bcc4827b7e48a1250add074bedcdaa0f7d489ca6ec3f80444077684b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
