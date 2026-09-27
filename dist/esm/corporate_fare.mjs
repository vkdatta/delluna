export const name="corporate_fare";
export const id="dl_ab8958994b84918deab8";
export const url=new URL("../icons/corporate_fare.svg?v=eaafa5d5886148a43394e9a0a3122f41a14c2d8e0b7b7799125a0fc6caf27d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
