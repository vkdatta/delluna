export const name="font_download_off-fill";
export const id="dl_05c954f59e051cb9909f";
export const url=new URL("../icons/font_download_off-fill.svg?v=6df103d6fad9f7f08b952f31a65278889a450e32cacd56e8fefc98b38906cdc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
