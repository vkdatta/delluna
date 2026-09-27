export const name="seatbelt-duotone";
export const id="dl_b8a08a2791a30bd7d273";
export const url=new URL("../icons/seatbelt-duotone.svg?v=11fb46f085ca8d1da6205359adcce27fd479edd8b70165a000d32d358297bb6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
