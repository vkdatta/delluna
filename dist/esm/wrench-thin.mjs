export const name="wrench-thin";
export const id="dl_0e8b0c7fe6cd8df640ef";
export const url=new URL("../icons/wrench-thin.svg?v=f940e96a0235d0e2e257932ad9f6b138be95abff587b2b9dd82b67ba8a27d07d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
