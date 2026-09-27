export const name="lucid_1-badge-check";
export const id="dl_5da655184fd24e8d973c";
export const url=new URL("../icons/lucid_1-badge-check.svg?v=9a50aad9d77d913d55b1e3a31d5654570e087546b687d3700d702143f245753a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
