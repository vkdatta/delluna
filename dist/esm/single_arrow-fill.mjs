export const name="single_arrow-fill";
export const id="dl_435341b1fce110a3934e";
export const url=new URL("../icons/single_arrow-fill.svg?v=4f2dfe34561717d5d3d92a4d22f6cd962208ffa7e1b7f6c794eddbdcdf7cfbed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
