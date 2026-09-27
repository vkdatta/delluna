export const name="brightness_6";
export const id="dl_27dd2938f9c61a984071";
export const url=new URL("../icons/brightness_6.svg?v=1f5cd067760e1d21a2f5656547481798c58d8d5e7605dbfc9b6caab356c41432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
