export const name="square-split-vertical-duotone";
export const id="dl_5e8ff70e419e4f8966c2";
export const url=new URL("../icons/square-split-vertical-duotone.svg?v=b57998d84fe199ce50add8f49f123501f0e6013f6f345a533b56eac36b77eeda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
