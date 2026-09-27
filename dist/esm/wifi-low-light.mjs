export const name="wifi-low-light";
export const id="dl_dbb8ec41c21e02db30ea";
export const url=new URL("../icons/wifi-low-light.svg?v=40cf23e419938693534c48c4f43f89dc94c086dd228dd635995496795df70250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
