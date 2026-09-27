export const name="partner_heart";
export const id="dl_e7a59a669a72e22e6e3f";
export const url=new URL("../icons/partner_heart.svg?v=591f3e4d191dd665d1a5567cb931a06895772e39dc141a780d3acdcb4d015305",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
