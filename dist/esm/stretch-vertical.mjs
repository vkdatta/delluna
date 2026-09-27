export const name="stretch-vertical";
export const id="dl_f18cb42b773e433fb42d";
export const url=new URL("../icons/stretch-vertical.svg?v=c8e9472dcdbdb50fe2900d0733cdfb98fbf87817d12615df616ed43af281eefa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
