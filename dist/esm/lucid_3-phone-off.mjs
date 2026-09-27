export const name="lucid_3-phone-off";
export const id="dl_42fd5a2d038d4f8cb92e";
export const url=new URL("../icons/lucid_3-phone-off.svg?v=03df0fad367f337f95cea964e195208620c51c6351ab7d104e35b2fe5dded0eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
