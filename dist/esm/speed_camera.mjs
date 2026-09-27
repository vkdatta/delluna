export const name="speed_camera";
export const id="dl_dd44b60eaf02ff84ce41";
export const url=new URL("../icons/speed_camera.svg?v=bfdf4f416d98525da798edef34db2242f0124166d6cda3bca9dc2c46563d3c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
