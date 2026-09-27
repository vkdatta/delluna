export const name="lucid_3-smartphone-charging";
export const id="dl_10642f8432e64ca6b773";
export const url=new URL("../icons/lucid_3-smartphone-charging.svg?v=8d2f5da45c41970e38651b4e3159bf605f05497e40f7b6f7c4ab0f7b1694adb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
