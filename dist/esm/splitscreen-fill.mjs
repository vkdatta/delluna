export const name="splitscreen-fill";
export const id="dl_d660bf963f1fc6039f06";
export const url=new URL("../icons/splitscreen-fill.svg?v=f5908e6b22f4370cbc7e293819979baf885c2d295880297c504f95d70325646f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
