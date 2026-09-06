export const name="switch-camera";
export const id="dl_ecb9632c1ab141b5bce6";
export const url=new URL("../icons/switch-camera.svg?v=a03ffdf0ea514bbbde7f8b21128725f41bfc122ba7a75996565e94a2e249070a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
