export const name="nest_hello_doorbell";
export const id="dl_c55974429143412fbe51";
export const url=new URL("../icons/nest_hello_doorbell.svg?v=1a4b273a6622fc981df036c88a4ebdc4dcaa46b2d72c448e1e6b4c2ee5656fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
