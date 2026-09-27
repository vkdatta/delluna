export const name="trackpad_input_3";
export const id="dl_c2fedec493b6d824ab03";
export const url=new URL("../icons/trackpad_input_3.svg?v=029193cccab7f3f3b1941186afc0b8c68b9224fff538f48d8d27e06bda0ba834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
