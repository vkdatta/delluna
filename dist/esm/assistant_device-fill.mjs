export const name="assistant_device-fill";
export const id="dl_0838f8be522240d47898";
export const url=new URL("../icons/assistant_device-fill.svg?v=798b610aa7408494fbfd3c83b0d1e65794e7cf7df4d71ba5a73c0985d61a350e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
