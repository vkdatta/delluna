export const name="line_weight";
export const id="dl_b115ca21ecb5452ab329";
export const url=new URL("../icons/L/line_weight.svg?v=e56606804b99f09b93f49216f2f207c70a1d78f22fb95f9344fed2ad2a99feb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
