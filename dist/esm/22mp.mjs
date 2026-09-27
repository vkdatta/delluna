export const name="22mp";
export const id="dl_343236f056622fc8da19";
export const url=new URL("../icons/22mp.svg?v=6bbe00b89e094e5caff55f92292c539651c79cbe6ac3a505b0168ec8da6efff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
