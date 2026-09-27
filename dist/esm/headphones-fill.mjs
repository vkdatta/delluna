export const name="headphones-fill";
export const id="dl_69a36b39aa7f4c4ab59e";
export const url=new URL("../icons/headphones-fill.svg?v=ee4359bbe3c70468f75327c0e302fd19f00d2e998170471c79b78bd5e3cd21c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
