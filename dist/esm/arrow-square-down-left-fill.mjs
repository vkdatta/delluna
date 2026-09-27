export const name="arrow-square-down-left-fill";
export const id="dl_88bb6701031a4237a1ff";
export const url=new URL("../icons/arrow-square-down-left-fill.svg?v=5e172d962ee40c9e3b6e551d546628444cff6341e78d51d596625216ccd4953f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
