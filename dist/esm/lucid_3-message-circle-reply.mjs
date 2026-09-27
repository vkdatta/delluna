export const name="lucid_3-message-circle-reply";
export const id="dl_b9e28f1e3eea4da3a244";
export const url=new URL("../icons/lucid_3-message-circle-reply.svg?v=a5776dc36f53150f8ee2db5b29e91c35a25d9abebf46e515caa6cebee95ca8cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
