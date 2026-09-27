export const name="cell-signal-none-light";
export const id="dl_c4431cc0eb7c418a9813";
export const url=new URL("../icons/cell-signal-none-light.svg?v=058a57e58f7e9b69a507e346b3a20dc2c9a855bda0590c041ce164c5d3b9b6e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
