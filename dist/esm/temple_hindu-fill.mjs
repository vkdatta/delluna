export const name="temple_hindu-fill";
export const id="dl_cf89e040e6ee434dba0d";
export const url=new URL("../icons/temple_hindu-fill.svg?v=30d290a6612b81bcdf34009f2b4a12f385e00615e1376718572d1fffaa613c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
