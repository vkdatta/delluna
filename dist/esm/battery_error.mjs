export const name="battery_error";
export const id="dl_37a0655a6852428786ff";
export const url=new URL("../icons/battery_error.svg?v=348e2086e8ed0b67950e71a7f8f6659e45656299d8d1ead4b6a96999c0896a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
