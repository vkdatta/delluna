export const name="lucid_3-qr-code";
export const id="dl_f7e5fec8aed3483c9473";
export const url=new URL("../icons/lucid_3-qr-code.svg?v=4469c830fd359af1ed2d15520d553021ad4e2a088e5798ccc29b1ba2834577d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
