export const name="nest_hello_doorbell-fill";
export const id="dl_636a0654f8c62a0252e9";
export const url=new URL("../icons/nest_hello_doorbell-fill.svg?v=db00d2d0eaf84062ae3dc66f5f163e48c3b1bde18d3b0ce8fde3387069d8c85d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
