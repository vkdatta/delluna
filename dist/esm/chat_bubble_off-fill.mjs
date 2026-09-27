export const name="chat_bubble_off-fill";
export const id="dl_4c1567671505645f30e4";
export const url=new URL("../icons/chat_bubble_off-fill.svg?v=73e73723a11383e2272641b39c6e4dbb902b8947d0afe1583520e4814a42277b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
