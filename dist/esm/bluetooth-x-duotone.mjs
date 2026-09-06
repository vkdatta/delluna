export const name="bluetooth-x-duotone";
export const id="dl_1ea1168a329f40269157";
export const url=new URL("../icons/bluetooth-x-duotone.svg?v=59a39a19fff5a4dbf5da88a3befe31c2e0f405c94dc046791a68aa76a9296229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
