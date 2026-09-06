export const name="cards-three-duotone";
export const id="dl_c5aa688eda0c4b2fb363";
export const url=new URL("../icons/cards-three-duotone.svg?v=745f19e6f37ac92a1bcb535e9736675529dcb449e91fe5a785227fb634d29fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
