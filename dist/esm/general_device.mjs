export const name="general_device";
export const id="dl_b29cb8e402f4458e9d93";
export const url=new URL("../icons/G/general_device.svg?v=db6559744d570479a5ce3d7cf897e2d77550698b0362ae19ece0f372e5860398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
