export const name="folder-open-bold";
export const id="dl_ac8fe4bb4e3648ecb62f";
export const url=new URL("../icons/folder-open-bold.svg?v=9a687a8323a05cd5e0ce63894e686572fbac70699c7d238e71a36b370b22d61e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
