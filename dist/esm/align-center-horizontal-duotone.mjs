export const name="align-center-horizontal-duotone";
export const id="dl_343dd757691b4a0a8508";
export const url=new URL("../icons/align-center-horizontal-duotone.svg?v=0ffbdfabb4272ea4673c6144d044cfff6ae05ac6df2d3764a8e2e27f17f8396e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
