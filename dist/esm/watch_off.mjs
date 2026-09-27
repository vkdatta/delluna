export const name="watch_off";
export const id="dl_d94ae7c122a686c44e01";
export const url=new URL("../icons/watch_off.svg?v=5061fdcc35b488de14e583785616a492ec97e513a8699650c12f97ef485c30d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
