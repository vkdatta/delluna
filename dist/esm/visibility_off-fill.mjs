export const name="visibility_off-fill";
export const id="dl_37d3b6624bab99ab7ee4";
export const url=new URL("../icons/visibility_off-fill.svg?v=a8b5c390a5a6806b3a64bb5b53a40c0b33db496e589346cec432f7e55f022d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
