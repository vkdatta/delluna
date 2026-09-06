export const name="bug-beetle-light";
export const id="dl_9c5bae34cd02421e82bb";
export const url=new URL("../icons/bug-beetle-light.svg?v=ee8dd127444ff865c2fc5844d00d045bc45cb2d589a75047a829a10b42526e3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
