export const name="hourglass-light";
export const id="dl_8141f45d88a840d3ad5a";
export const url=new URL("../icons/hourglass-light.svg?v=f7180b200a61c44094febfbd77b98027a7dc737e145131354e3eb3402c347c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
