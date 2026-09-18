export const name="health_and_beauty";
export const id="dl_950ce747502b46798118";
export const url=new URL("../icons/H/health_and_beauty.svg?v=ccad314df6661262011e996e66baec09af02c0f87d10a7ed14c9d1e5288788b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
