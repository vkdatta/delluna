export const name="circle-bold";
export const id="dl_963ae29c8612423fa8d9";
export const url=new URL("../icons/circle-bold.svg?v=98864523b27ed74ae7792549a77adfe7ed459238385bbb50fe77c9f92c16bb7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
