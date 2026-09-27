export const name="empty-duotone";
export const id="dl_68f720006b394e86a15c";
export const url=new URL("../icons/empty-duotone.svg?v=f8cf25df53be3c8bb08af8d7574665b7bf61a0927a98088ef913b9931fda08c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
