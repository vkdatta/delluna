export const name="intersect-thin";
export const id="dl_ae52b1a1444c4215b674";
export const url=new URL("../icons/intersect-thin.svg?v=d008741bf7599dee1379c422ea47d3d52ecafb74fe7b444909bcec74ba419826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
