export const name="file-zip-fill";
export const id="dl_4e477be4cffb485b985a";
export const url=new URL("../icons/file-zip-fill.svg?v=399a840f8a5eb926b7c9e9164ccdfb7419711950f0399cba3967f8977f9db612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
