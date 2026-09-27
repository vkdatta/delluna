export const name="personal_bag_off";
export const id="dl_88cd2a343e3e0a23689f";
export const url=new URL("../icons/personal_bag_off.svg?v=42485ef569692729197179788de388bc915980d97c76d3df7b797fe243c49a1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
