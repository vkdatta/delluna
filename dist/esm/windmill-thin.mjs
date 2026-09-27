export const name="windmill-thin";
export const id="dl_d24affb12768aa3e97db";
export const url=new URL("../icons/windmill-thin.svg?v=36c43afb694108faaad93ed8b7346287309b5fef78691fc716076445153a144c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
