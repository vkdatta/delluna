export const name="share-network";
export const id="dl_7e36657ff249409f97dd";
export const url=new URL("../icons/S/share-network.svg?v=e6923db3591f797c89c36671aad3e20effd7b06e6eb400b2a7ffb6daaed0474a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
