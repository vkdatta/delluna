export const name="scan_delete-fill";
export const id="dl_0383dfbae69d461c3718";
export const url=new URL("../icons/scan_delete-fill.svg?v=3e0ed988a5e9d47e35fccfe8a8ac36a94deef0e8434339823c64c8102115cc4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
