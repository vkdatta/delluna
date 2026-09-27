export const name="arrow-up-left-fill";
export const id="dl_c42d3d57eff641609780";
export const url=new URL("../icons/arrow-up-left-fill.svg?v=860715195ad3f4732f3120ba71a865bf3b69dca97cf50bf687dc15c329b30f81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
