export const name="lucid_3-message-circle-reply";
export const id="dl_b9e28f1e3eea4da3a244";
export const url=new URL("../icons/lucid_3-message-circle-reply.svg?v=a3e87aa2746f33dd987bafcbdb29df77ef881aca1b84b505fa61cec96027f1c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
