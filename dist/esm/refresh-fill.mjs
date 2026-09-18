export const name="refresh-fill";
export const id="dl_3d57c125172a41cb8333";
export const url=new URL("../icons/R/refresh-fill.svg?v=cd36ebaa724dcacf31dae2b6f05893560e2cd44d07fee736732388ace0c2abc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
