export const name="wifi-high";
export const id="dl_bad10f95ce0649c7a3ee";
export const url=new URL("../icons/wifi-high.svg?v=4b442397bb7c4d6f57e4b8f97483991ae59d055af01916fea7b4f8c8eeeb7548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
