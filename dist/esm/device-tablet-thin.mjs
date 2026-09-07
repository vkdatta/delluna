export const name="device-tablet-thin";
export const id="dl_a6ddcd08b5e74773a561";
export const url=new URL("../icons/device-tablet-thin.svg?v=b6d3500326ffbd1f8f781bca43a7775426e1200fd37c5639ab604670076b4c8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
