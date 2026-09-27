export const name="lucid_2-inspection-panel";
export const id="dl_21576cd1f33b44de84c3";
export const url=new URL("../icons/lucid_2-inspection-panel.svg?v=3c45eb5b3ccda6f8a1c6e1ebc47427944c7a756271d40027c4a2b2bf06f15288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
