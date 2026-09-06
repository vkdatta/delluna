export const name="network-slash";
export const id="dl_03e07d0ff81e4044be86";
export const url=new URL("../icons/network-slash.svg?v=6cb3ead6abc083c37ce44ffa0f963810b3f3dfabf646e2510917971679a0290d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
