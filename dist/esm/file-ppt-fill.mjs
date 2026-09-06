export const name="file-ppt-fill";
export const id="dl_783cbcf32d5240bca415";
export const url=new URL("../icons/file-ppt-fill.svg?v=0f68294a38906be21f91adbdb02327dcb644a30f556cf94d068d38ef349d296d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
