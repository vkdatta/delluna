export const name="lucid_2-corner-down-left";
export const id="dl_3a5d02a20a8847eb973b";
export const url=new URL("../icons/lucid_2-corner-down-left.svg?v=2d49b3bf290782162f029ba63204f3886f6763261cbf9d6d2398f4a25316bccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
