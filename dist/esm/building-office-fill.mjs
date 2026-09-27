export const name="building-office-fill";
export const id="dl_6b24f163f42343008cca";
export const url=new URL("../icons/building-office-fill.svg?v=f6f9688ac609657b5c06c6a11c0338f0c08c84a1858ac1d4040610e8edb647c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
