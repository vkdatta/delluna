export const name="near_me";
export const id="dl_98e92aed3d4e51a250cf";
export const url=new URL("../icons/near_me.svg?v=162882a23d35e50be28930272208604342b97e96bcb46c652882ed82dbd424d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
