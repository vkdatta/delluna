export const name="arrow_upward_alt";
export const id="dl_10c8a213444d72f80e10";
export const url=new URL("../icons/arrow_upward_alt.svg?v=f796b0d9742c8093726ea998a7bfb986bcbaa75d2246555c62df724407c53004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
