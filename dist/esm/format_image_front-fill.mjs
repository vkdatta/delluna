export const name="format_image_front-fill";
export const id="dl_580096ff1bff4a77b868";
export const url=new URL("../icons/format_image_front-fill.svg?v=d21b41cdc5e8ee28667b80c39600d6958b86e3c507efd4c4e5bb46c5e752989c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
