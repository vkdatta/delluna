export const name="pen-bold";
export const id="dl_9ff7a927c58c4ea4a6ea";
export const url=new URL("../icons/pen-bold.svg?v=0a90f89ec7a48e548be1c5f9f94b8be252081adc0d10dae3c8c47e74b569ea12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
