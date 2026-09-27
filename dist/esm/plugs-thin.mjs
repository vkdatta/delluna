export const name="plugs-thin";
export const id="dl_fe93f37817054b3f8a02";
export const url=new URL("../icons/plugs-thin.svg?v=be0a993ac7a30bb908d1d736f7adfc67fd0253cb3f63a3f28761e98db80c3f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
