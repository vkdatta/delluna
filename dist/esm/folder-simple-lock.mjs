export const name="folder-simple-lock";
export const id="dl_2c9754e20c354f3bba95";
export const url=new URL("../icons/folder-simple-lock.svg?v=ee2265e4c32a8ae84f61690053b13d0d4b370cfdc665a9829da6cff017a88f23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
