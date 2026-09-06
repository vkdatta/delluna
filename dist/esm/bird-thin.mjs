export const name="bird-thin";
export const id="dl_973c93e539054083b184";
export const url=new URL("../icons/bird-thin.svg?v=30453d82f4122e7027950caf76c0f5b807870547a847f62b1c058661e8cc11c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
