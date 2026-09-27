export const name="lucid_1-brick-wall";
export const id="dl_e740df8cfe7841e7ae46";
export const url=new URL("../icons/lucid_1-brick-wall.svg?v=be3527509f2072fd1746bd33f3d3571271beb8c604c90fd52bdb96804eb3c589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
