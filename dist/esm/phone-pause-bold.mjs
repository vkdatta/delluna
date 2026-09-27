export const name="phone-pause-bold";
export const id="dl_238d31f20362486fab98";
export const url=new URL("../icons/phone-pause-bold.svg?v=4895259acacc5078c62d17898b3eade7a33e7b73be0c402a83139be5b81e1ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
