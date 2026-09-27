export const name="print_connect";
export const id="dl_18376f11f88d73cd7ac2";
export const url=new URL("../icons/print_connect.svg?v=f30e00d9871e8f1045b2fd263de43f61b20e6e67ba29fa742c6fef8b7f6fb007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
