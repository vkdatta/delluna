export const name="turn_left-fill";
export const id="dl_e952a219133f14248e0c";
export const url=new URL("../icons/turn_left-fill.svg?v=842cb940947fa290e198643dc0bec2e7391a873d6dff57c59faca6a4f2049d81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
