export const name="arrow-down-right";
export const id="dl_4e6a9919f5c44a079168";
export const url=new URL("../icons/arrow-down-right.svg?v=0d9e603eae55f3745fed91439e428a6167a5922696bc90912341995dd4d409d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
