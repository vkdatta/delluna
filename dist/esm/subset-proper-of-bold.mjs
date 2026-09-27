export const name="subset-proper-of-bold";
export const id="dl_48b1c410fd4f157eaaa9";
export const url=new URL("../icons/subset-proper-of-bold.svg?v=9d02fc461343e62b58221e34c2341ab3683bf667b85e6b654fbddcbe4201380d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
