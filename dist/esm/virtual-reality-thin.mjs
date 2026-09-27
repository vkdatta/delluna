export const name="virtual-reality-thin";
export const id="dl_933d0d2e151cbb2e9d11";
export const url=new URL("../icons/virtual-reality-thin.svg?v=40e917188ba60ff4d2e1249770746d1a56db581385b607ce5311d3fb44729b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
