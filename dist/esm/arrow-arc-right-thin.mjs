export const name="arrow-arc-right-thin";
export const id="dl_f787fb8f66cf4e0e8f0d";
export const url=new URL("../icons/arrow-arc-right-thin.svg?v=1a6f51a40d8f87f4709e792ccc86254732c70701393d34ad3d417643fad11969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
