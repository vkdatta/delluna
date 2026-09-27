export const name="dot_chevron";
export const id="dl_2303184041d24c3aae14";
export const url=new URL("../icons/dot_chevron.svg?v=74d8ace261bf87f5640177fa0ef089f0e6317a7312e155db9af051330c06356d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
