export const name="qr_code_2_add-fill";
export const id="dl_ebc5b0f558fda09d5a3b";
export const url=new URL("../icons/qr_code_2_add-fill.svg?v=74bef0b73d3e621182757d32c7c5122cd589693b32b5c1b25e0d3ba131be3e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
