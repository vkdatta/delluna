export const name="wifi-medium-fill";
export const id="dl_fb9410e1ef1b99296fe8";
export const url=new URL("../icons/wifi-medium-fill.svg?v=812afb93b7531ac1703349b8fd334e3aef39faab24b0562f7ec7cbe18236225b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
