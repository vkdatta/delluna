export const name="desktop_cloud_stack-fill";
export const id="dl_a676318bfdd85801fcda";
export const url=new URL("../icons/desktop_cloud_stack-fill.svg?v=718ac1fd2e3ae16a6d4b212bd58ae42308cd55f0a87e353f5da626d91ab24f09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
