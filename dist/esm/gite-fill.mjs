export const name="gite-fill";
export const id="dl_47b9eac2db0645dfe971";
export const url=new URL("../icons/gite-fill.svg?v=e2a61a318ef2d240952b303302d64ee4c73103aad8e8fd7bba51c237cda43ef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
