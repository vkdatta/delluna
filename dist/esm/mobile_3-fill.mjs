export const name="mobile_3-fill";
export const id="dl_bbbf7d3bbfe44fa4b621";
export const url=new URL("../icons/mobile_3-fill.svg?v=1dd65d83702e54d469cd829eff8aa1d8f7f4224ce9c7b2c30c49d51af0abe2ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
