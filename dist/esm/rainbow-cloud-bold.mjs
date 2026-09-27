export const name="rainbow-cloud-bold";
export const id="dl_a16ae6bbb0a9450f9a3e";
export const url=new URL("../icons/rainbow-cloud-bold.svg?v=980d13205ecb9fa85d7bb0fc244f5eefdd0c0524d17ac76a46bfa1d40c4c22ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
