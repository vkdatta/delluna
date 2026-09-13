export const name="24mp";
export const id="dl_bc5419a948c449a4a794";
export const url=new URL("../icons/2/24mp.svg?v=4a16809a760984525426aefed79befb3c48bf7248b1376cb5037e6946115f7c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
