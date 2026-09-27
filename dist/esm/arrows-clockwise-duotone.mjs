export const name="arrows-clockwise-duotone";
export const id="dl_724c85248f3349a1b2ad";
export const url=new URL("../icons/arrows-clockwise-duotone.svg?v=2fca5d66a06be890c3b2d1095ebf740da8cf2310b543239d26bba0385440db2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
