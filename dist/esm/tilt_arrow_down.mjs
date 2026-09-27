export const name="tilt_arrow_down";
export const id="dl_185b0d2b868c109e2e76";
export const url=new URL("../icons/tilt_arrow_down.svg?v=f1d6a71cb9f4055c9fd86d1088f82bee70fe28abd072a6f47fdaa12f4399bbac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
