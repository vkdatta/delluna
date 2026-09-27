export const name="lucid_3-qr-code";
export const id="dl_f7e5fec8aed3483c9473";
export const url=new URL("../icons/lucid_3-qr-code.svg?v=feeb1a4200918b5be6cfc20382c7edb5f55cbb647e66acec1e9426d953a0d88e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
