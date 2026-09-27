export const name="flood";
export const id="dl_0c750e63ec2a0cf3dd62";
export const url=new URL("../icons/flood.svg?v=f1aa5b9d4acf5204273c8a72c4d225bff0b576de7d88adf566af6caaf55800ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
