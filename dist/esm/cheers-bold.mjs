export const name="cheers-bold";
export const id="dl_d975f5c953aa4d8c8173";
export const url=new URL("../icons/cheers-bold.svg?v=84618031cf7469b92cf2f80a853f35486fbe3ec01402f81729b83e8b0024d3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
