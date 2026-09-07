export const name="warning-diamond-duotone";
export const id="dl_f63eb4941cb644f0a55d";
export const url=new URL("../icons/W/warning-diamond-duotone.svg?v=0bdbe2f5d550dfdade7bdae05c4e3c6164833c4c3d9395a5ef9698a01943b971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
