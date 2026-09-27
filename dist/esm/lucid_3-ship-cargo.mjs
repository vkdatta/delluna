export const name="lucid_3-ship-cargo";
export const id="dl_e6bfbdb3fc54453d884f";
export const url=new URL("../icons/lucid_3-ship-cargo.svg?v=0e5f0d2ac773beee6efd06a5e6a595edfa2c8f086675955f9f48da8724a837a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
