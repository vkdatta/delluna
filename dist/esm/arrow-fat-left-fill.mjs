export const name="arrow-fat-left-fill";
export const id="dl_fb380522b65e4b64bfbf";
export const url=new URL("../icons/arrow-fat-left-fill.svg?v=5cc5e29e3fef42a7bb1c9eb05310347301e31477865325b027c3a3d9ecdf1643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
