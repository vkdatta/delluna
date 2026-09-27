export const name="format_h6-fill";
export const id="dl_c19caedb1b2ef1e269cc";
export const url=new URL("../icons/format_h6-fill.svg?v=e22e01c7471fb7cf66095497da6cf344eddfc1ccdb074394b83c134d33c7e82b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
