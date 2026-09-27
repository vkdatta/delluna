export const name="draw";
export const id="dl_031f2b05665f77845b97";
export const url=new URL("../icons/draw.svg?v=5425eac1fad8b9e96f6db93d0c16204d985affa1bf01c0e03cc2183ab64de881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
