export const name="line_end_arrow_notch";
export const id="dl_48bbaaf1b2288011a98b";
export const url=new URL("../icons/line_end_arrow_notch.svg?v=6d1e5524a3c99ae07dc85484ecea03a69db9a5fc497e144f5964b70be1ea3c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
