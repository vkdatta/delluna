export const name="pen-duotone";
export const id="dl_c8d31be94a7747fabfac";
export const url=new URL("../icons/pen-duotone.svg?v=4cfe1288502dbff9998957d17faea019eb024f358b1fc5daaefb2ba594b60489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
