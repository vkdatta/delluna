export const name="user_attributes";
export const id="dl_23e969187af73fd4a2c3";
export const url=new URL("../icons/user_attributes.svg?v=2c88a406a2da8eafa51aad8206fe30389b3e431572d8eecd53595504954a5657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
