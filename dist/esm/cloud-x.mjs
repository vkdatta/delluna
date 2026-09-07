export const name="cloud-x";
export const id="dl_a1ae6d43f58e4d4c95a4";
export const url=new URL("../icons/cloud-x.svg?v=677fd294a30360ea93094b3794ca30a31f47b6dd75e59a6ae9030e187c62ec26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
