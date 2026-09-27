export const name="lucid_3-message-circle-reply";
export const id="dl_b9e28f1e3eea4da3a244";
export const url=new URL("../icons/lucid_3-message-circle-reply.svg?v=847e96c42c56fc8790b23d71397dfc5264fd9ff089d3e0eb94bb04fb7a5f6fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
