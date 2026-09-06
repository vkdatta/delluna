export const name="copy-simple";
export const id="dl_18ddb474456f4f93aae9";
export const url=new URL("../icons/copy-simple.svg?v=65fe240918529da6e9208a4a053f0ac05b8a9a834933e97115f22b630e17f0e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
