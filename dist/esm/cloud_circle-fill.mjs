export const name="cloud_circle-fill";
export const id="dl_a9661488d9e2e2e9bbcd";
export const url=new URL("../icons/cloud_circle-fill.svg?v=bb7d31158fb8f7f0c63a0c0f03c5e49d08d56fbd904cfe1f6729c7de8107aed7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
