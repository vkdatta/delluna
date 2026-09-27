export const name="toggle-right-bold";
export const id="dl_8b09539925973f3ea46f";
export const url=new URL("../icons/toggle-right-bold.svg?v=9bc9b60062153f73dbff5c0ad08cbdbdb2bcd22cc5cf0d4a98a4b2cb364ff388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
