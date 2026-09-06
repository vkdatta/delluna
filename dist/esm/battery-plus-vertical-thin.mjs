export const name="battery-plus-vertical-thin";
export const id="dl_b0c72acd9a264c6ca6c7";
export const url=new URL("../icons/battery-plus-vertical-thin.svg?v=322da1b549ae67a9f421c94df17a309f2160d5395cf73934b5641a652c379000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
