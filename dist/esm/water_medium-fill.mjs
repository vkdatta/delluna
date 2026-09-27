export const name="water_medium-fill";
export const id="dl_941e9db76e53da86af97";
export const url=new URL("../icons/water_medium-fill.svg?v=b2f9b896b8cac4adf30e32c2b6a079f5a67ee5d16ee4d754717a72767f00c05c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
