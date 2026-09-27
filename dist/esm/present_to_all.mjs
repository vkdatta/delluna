export const name="present_to_all";
export const id="dl_37d2717f27257db66bf6";
export const url=new URL("../icons/present_to_all.svg?v=331fe6bf70e20655a9e08bd9be952789bf259ec31048090770ec46bde90a94fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
