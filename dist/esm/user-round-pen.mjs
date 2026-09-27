export const name="user-round-pen";
export const id="dl_0a06e53d562046e191ec";
export const url=new URL("../icons/user-round-pen.svg?v=2f24d4a92f0b5cde228df4688f3e9f0eeb59c887378d732fa1013e3b849ece70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
