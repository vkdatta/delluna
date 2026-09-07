export const name="arrow-right";
export const id="dl_0b0457b1f332433f8a3c";
export const url=new URL("../icons/arrow-right.svg?v=e45bc4a12592b8723110db42c6deffdf177e4fe7704cf50324963fa0a59b2d74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
