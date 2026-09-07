export const name="traffic-sign";
export const id="dl_39d7b0cf71d14eecb5ac";
export const url=new URL("../icons/T/traffic-sign.svg?v=aaedfa975f8564f0347983f1cab0c7ad5bc1db62af9a833b74f14cca4c674e75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
