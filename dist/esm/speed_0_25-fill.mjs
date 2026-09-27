export const name="speed_0_25-fill";
export const id="dl_b7599a0a32b0e8f20b4a";
export const url=new URL("../icons/speed_0_25-fill.svg?v=4eae975a4f1354f35870212ef4d0983756271bfa50f4723288b5d015d38e6b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
