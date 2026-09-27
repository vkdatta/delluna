export const name="rainy-fill";
export const id="dl_5bd4053d8dfaa2b084b7";
export const url=new URL("../icons/rainy-fill.svg?v=b42c9d236484351a3954dc19ca8ad498ce4354396f24a906c8d9df37b808d865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
