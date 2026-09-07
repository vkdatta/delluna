export const name="television-duotone";
export const id="dl_d0351325d72e4bbc9c62";
export const url=new URL("../icons/T/television-duotone.svg?v=e4d84e326fccf615c5d475e8fff0f7f9d2ca8fd00cede30ac36db91552f18da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
