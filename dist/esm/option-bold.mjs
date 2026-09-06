export const name="option-bold";
export const id="dl_28137dc0154640a4a563";
export const url=new URL("../icons/option-bold.svg?v=a1d8d20b78dd82ba6e3dc02d8f3ac1e55e92cc5087d7fa6f458bf67f9c6ff190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
