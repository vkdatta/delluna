export const name="stop-bold";
export const id="dl_7d8b28e2b73daf7dadcb";
export const url=new URL("../icons/stop-bold.svg?v=19f42af07e7c63ccf9b0a1dd308f3b8c8e7a95699aeee77520d0292fa1dd5f09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
