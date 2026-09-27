export const name="network-x-fill";
export const id="dl_338bfdc0a0714e889968";
export const url=new URL("../icons/network-x-fill.svg?v=14522f157dde1e7002e8788cecf37cb733d6cfebf9b0a49d2d73df77f789cb71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
