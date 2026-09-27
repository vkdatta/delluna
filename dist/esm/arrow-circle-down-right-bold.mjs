export const name="arrow-circle-down-right-bold";
export const id="dl_c92a40858ad04f7ebbf7";
export const url=new URL("../icons/arrow-circle-down-right-bold.svg?v=20820b5c28cbc24fc2cf9ba62edba2b2b6b4fa599ec7e79defc762228e476a0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
