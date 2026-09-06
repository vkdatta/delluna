export const name="lucid_3-message-circle-plus";
export const id="dl_39f9f84326994cb7bddb";
export const url=new URL("../icons/lucid_3-message-circle-plus.svg?v=b754da9ec1a2972b40e40d2c7a9bbbc21c4ebcc85a85a1a3a8f1e42484f10cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
