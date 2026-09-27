export const name="vpn_key_off-fill";
export const id="dl_b02bbafbdecf1bb53b7f";
export const url=new URL("../icons/vpn_key_off-fill.svg?v=369c58c7865038cd241e152295f9ca45fe71ca7d43b12eb2fc9cceb7cf528863",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
