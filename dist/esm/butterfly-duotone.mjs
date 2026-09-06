export const name="butterfly-duotone";
export const id="dl_b31bfadd5b1f4cfb858c";
export const url=new URL("../icons/butterfly-duotone.svg?v=2596f0016e8b5be06c1b53e39cc7bad6d36c3c4d7249f684c26670c4710f3eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
