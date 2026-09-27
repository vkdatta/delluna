export const name="wind-duotone";
export const id="dl_abd1e3877f92185bce81";
export const url=new URL("../icons/wind-duotone.svg?v=09bb64334f0e3177274fa1ff29ab26736674af3593b41082427fecc3d625f6ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
