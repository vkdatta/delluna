export const name="arrow_upload_ready-fill";
export const id="dl_e0a0d19adb8cd583b6f5";
export const url=new URL("../icons/arrow_upload_ready-fill.svg?v=6b62745ab8ac165ba55b066adb2f7d28b30ef63f4df710c0e90bee516a62e60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
