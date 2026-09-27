export const name="bone-light";
export const id="dl_4b6bffc8699f49d4bd5e";
export const url=new URL("../icons/bone-light.svg?v=df05457532e4430b1c0a1d7a72cc52a4f006702fa6523cbd78367ae903b97182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
