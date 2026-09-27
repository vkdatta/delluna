export const name="lucid_1-copy-minus";
export const id="dl_ad5c49a3d499474dbfe9";
export const url=new URL("../icons/lucid_1-copy-minus.svg?v=bb8be539fe401f3db61102df262face4e5c8350117d129e86f4eec6b05ca0fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
