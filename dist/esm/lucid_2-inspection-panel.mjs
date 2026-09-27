export const name="lucid_2-inspection-panel";
export const id="dl_21576cd1f33b44de84c3";
export const url=new URL("../icons/lucid_2-inspection-panel.svg?v=2e15e86d789a5745235947fae66314a2f46b906b2b06deade343f6dc8d3940e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
