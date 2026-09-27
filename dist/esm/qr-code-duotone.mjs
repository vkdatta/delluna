export const name="qr-code-duotone";
export const id="dl_d5036191952b4032a9ae";
export const url=new URL("../icons/qr-code-duotone.svg?v=2f8a8cb1ba07e761dca5b1eb287add4dff86367cd742a40e2c6a5b3dc2e1b17c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
