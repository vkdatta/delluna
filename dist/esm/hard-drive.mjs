export const name="hard-drive";
export const id="dl_ae3f8ae42b14456dacef";
export const url=new URL("../icons/hard-drive.svg?v=f6b1ca22570e5f3e852bec13a4898ca183ed80d5042ed8998cc5722d122cdf4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
