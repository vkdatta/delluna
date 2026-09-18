export const name="qr_code_2_add-fill";
export const id="dl_1b24f316116c4ed5b9eb";
export const url=new URL("../icons/qr_code_2_add-fill.svg?v=63728c0173a1351a9823e9f6fbbd8f251f07973d0fe1772bcf736681479d2c4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
