export const name="18mp";
export const id="dl_1532ab66e1801e240c43";
export const url=new URL("../icons/18mp.svg?v=0852b3e086142eb780f6ec9ea3430bb4754751a3e9ed14028eda000430c96a86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
