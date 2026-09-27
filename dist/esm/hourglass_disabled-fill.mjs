export const name="hourglass_disabled-fill";
export const id="dl_4454b8e8a93767e30329";
export const url=new URL("../icons/hourglass_disabled-fill.svg?v=8872075e350c39dd2b96e608c3193f115deeed7af37f34a2e84e34af8371cb36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
