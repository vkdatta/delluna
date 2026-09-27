export const name="chats-bold";
export const id="dl_18cfd5d1bd3c4acf831a";
export const url=new URL("../icons/chats-bold.svg?v=308179a0a5d426f052e2e7773bf91973050908a7a67d4e09f4f961fe8abc534f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
