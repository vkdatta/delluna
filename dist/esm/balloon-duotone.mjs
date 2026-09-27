export const name="balloon-duotone";
export const id="dl_985d583ac8a84d6f9899";
export const url=new URL("../icons/balloon-duotone.svg?v=f5d073597bf3a969e3bd51012731da963359df234cf64e6422d92bd1287d80b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
