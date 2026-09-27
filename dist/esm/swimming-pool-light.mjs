export const name="swimming-pool-light";
export const id="dl_b9ae44d2c14e0fc92fe7";
export const url=new URL("../icons/swimming-pool-light.svg?v=2238a0dcec1c98103173b096a0de0479966e9061551e80b0ee0510e9e33efd32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
