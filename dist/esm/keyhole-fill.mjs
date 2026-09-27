export const name="keyhole-fill";
export const id="dl_1f2f43ce9fc8448daa08";
export const url=new URL("../icons/keyhole-fill.svg?v=9e7c6f7828cda5a611a9afd5dae5d91438abc493feaf6ecf949dc6937a57fdcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
