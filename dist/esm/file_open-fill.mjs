export const name="file_open-fill";
export const id="dl_d5270b66e966469b9ec5";
export const url=new URL("../icons/file_open-fill.svg?v=98501636f41bbb2da1b550c5452e093070ee663e33672cca12c323b5a82ee12c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
