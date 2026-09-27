export const name="add_alert";
export const id="dl_27dac5a6a588add973d9";
export const url=new URL("../icons/add_alert.svg?v=bd8df20baf3dac37e5941e0e5e207b2d6a2c1451469f98e4f4119ee696661038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
