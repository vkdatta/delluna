export const name="tv_off-fill";
export const id="dl_492a40c558c46f6a8ef6";
export const url=new URL("../icons/tv_off-fill.svg?v=c7b41be4a7385823eb429353b77fef2d163cb722370dbfd2a79dbb807f4bf5d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
