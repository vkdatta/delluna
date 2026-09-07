export const name="user-square";
export const id="dl_c0ffd8ad90614409abdc";
export const url=new URL("../icons/U/user-square.svg?v=18d6323023e83cae9865b2b1a36df4156f347654f12e25e02c68d9d55b4480b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
