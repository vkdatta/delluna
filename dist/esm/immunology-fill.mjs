export const name="immunology-fill";
export const id="dl_26facc0103b234d02c15";
export const url=new URL("../icons/immunology-fill.svg?v=b675feed97d9a8b0852ebd90276ecad9fd2065ba0a6220498146204272def4e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
