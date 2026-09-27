export const name="camera-light";
export const id="dl_450445ae88e34e048c47";
export const url=new URL("../icons/camera-light.svg?v=d20cf76b94648f129ba03f9eab605db27762671d96951cf9a675cc2009aabc58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
