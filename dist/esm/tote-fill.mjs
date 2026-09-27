export const name="tote-fill";
export const id="dl_4635ab4348b71590de5c";
export const url=new URL("../icons/tote-fill.svg?v=2cb8e03164bc6982e830f68b789ac5ee47b9132550cee28b8590d7a54b37a5f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
