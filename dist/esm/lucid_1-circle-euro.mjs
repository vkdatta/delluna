export const name="lucid_1-circle-euro";
export const id="dl_46d2ef1486a34daab166";
export const url=new URL("../icons/lucid_1-circle-euro.svg?v=9027116f9077cb2b90f194102c89e2ad0e88d93800c8515a5f2a7e79e9342d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
