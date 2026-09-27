export const name="1x_mobiledata_badge";
export const id="dl_90601eac5d36be27482a";
export const url=new URL("../icons/1x_mobiledata_badge.svg?v=b12db0dae782061b91f8610a5537989f3e768f5cbdfb7282a0728bee3b9db3bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
