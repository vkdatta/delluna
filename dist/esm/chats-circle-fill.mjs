export const name="chats-circle-fill";
export const id="dl_de647d4fa4ad4dcbb8aa";
export const url=new URL("../icons/chats-circle-fill.svg?v=8221ae3a3a84c4ad157ecc191a6d7dd2d039a126de4435e0bce9dcf15f2eb266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
