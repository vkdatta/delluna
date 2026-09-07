export const name="scan-duotone";
export const id="dl_58e33436a9fb49c4821f";
export const url=new URL("../icons/S/scan-duotone.svg?v=69c2bdfe6d6fa604ec6172e7e7d7495a45f7375b8f18d3ada0834da72ce61d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
