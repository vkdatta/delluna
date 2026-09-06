export const name="caret-right-fill";
export const id="dl_99bf66255fdb446da1ee";
export const url=new URL("../icons/caret-right-fill.svg?v=c62278a701f1e4c08f424ce4b5cac69c8adb23b496dae489d5545ea7e6c019ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
