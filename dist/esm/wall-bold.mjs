export const name="wall-bold";
export const id="dl_608f81b8ac924c528258";
export const url=new URL("../icons/W/wall-bold.svg?v=c1b39978fead68e7018f987cc6b1b4552d765e748d04bb8803ba14f52fe9359d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
