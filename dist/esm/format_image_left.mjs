export const name="format_image_left";
export const id="dl_19d91b4a8d7da1f2e039";
export const url=new URL("../icons/format_image_left.svg?v=e207565bfd22bf1b116523d91c0b0545a0497daf87e423eed022aa26679ee5c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
