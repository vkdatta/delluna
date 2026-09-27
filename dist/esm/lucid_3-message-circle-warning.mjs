export const name="lucid_3-message-circle-warning";
export const id="dl_cf0fd172ff1d47e6a76b";
export const url=new URL("../icons/lucid_3-message-circle-warning.svg?v=fec1ba1febd87b9f292745d9f8761e13ecb759784b3a11c7d06e66298592def7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
