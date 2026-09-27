export const name="lock-fill";
export const id="dl_3eda591e404f09738d5c";
export const url=new URL("../icons/lock-fill.svg?v=8d24cd80f0e2eb13e9464418578d9c9834f5716b8e3d59dac5aa8f61cee67399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
