export const name="baseball-duotone";
export const id="dl_d1d91458247e45a4aa7f";
export const url=new URL("../icons/baseball-duotone.svg?v=61a0d0337cef8911be9ca15aa52eb9999fb650be170a3a40e93329815a1ab180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
