export const name="family_star";
export const id="dl_c9ab6ba4465f07f38c30";
export const url=new URL("../icons/family_star.svg?v=06aee27fc6d1c6f55c67cb2e8cffb1a0f881f61ebeef95fa9ba4121353a964d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
