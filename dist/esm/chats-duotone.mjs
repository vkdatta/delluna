export const name="chats-duotone";
export const id="dl_0bfcfb9770e2483e87f4";
export const url=new URL("../icons/chats-duotone.svg?v=98336e004fff72f2963a00e7a6612062bcc4b0f66f35227cf9438c25a6fa50d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
