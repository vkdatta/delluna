export const name="battery-plus";
export const id="dl_3903c03003ad4359b00a";
export const url=new URL("../icons/battery-plus.svg?v=d903abb85e82239983ed837298210746978eb8ff1372ec9f1401cac07d04bc23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
