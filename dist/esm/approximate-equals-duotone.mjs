export const name="approximate-equals-duotone";
export const id="dl_e34e0d22d1114bf6a6de";
export const url=new URL("../icons/approximate-equals-duotone.svg?v=0514193fffcedce02060cf7e0440df51771d2f423d0d7ba9d591c70c6ba9036d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
