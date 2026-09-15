export const name="fast_forward";
export const id="dl_3cf88f0c931142e28a5c";
export const url=new URL("../icons/F/fast_forward.svg?v=0f8988e48ffc53b8f3333df0e4adaf3974b3bfa516aa0fa922d67e7aa3b4de6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
