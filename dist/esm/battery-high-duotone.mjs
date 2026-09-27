export const name="battery-high-duotone";
export const id="dl_7e33de5a764d4b2c814e";
export const url=new URL("../icons/battery-high-duotone.svg?v=568a68b884d9e757514b7a8d81eb37f7546aaf7184ec54dd0a9b5633e0844d5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
