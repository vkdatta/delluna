export const name="cell-signal-high-fill";
export const id="dl_6ba2ddbdc0484b7fb5a4";
export const url=new URL("../icons/cell-signal-high-fill.svg?v=974aec06ddbe7f96f9ca795db89c726bdf2fff980d6324b228d2d9361b63943a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
