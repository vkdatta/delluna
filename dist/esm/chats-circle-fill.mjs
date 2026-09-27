export const name="chats-circle-fill";
export const id="dl_de647d4fa4ad4dcbb8aa";
export const url=new URL("../icons/chats-circle-fill.svg?v=5fc95f7b5a0dc7e3777f06207bd52487f8717c9f9edca9769df74832a4f9046e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
