export const name="lucid_2-inspection-panel";
export const id="dl_21576cd1f33b44de84c3";
export const url=new URL("../icons/lucid_2-inspection-panel.svg?v=2ab65f2ab1244e4ce547a4a5949831ae0bf193be55b3c843ce03839351a5f5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
