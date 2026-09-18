export const name="laptop_windows";
export const id="dl_641ed679c7fb4426a07b";
export const url=new URL("../icons/laptop_windows.svg?v=a9b7897bbe997d662ddbdc2784358cadb696804c947a0084b5385ef425273bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
