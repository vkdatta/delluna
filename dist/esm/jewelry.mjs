export const name="jewelry";
export const id="dl_c30ce0e9d64a1138cf6a";
export const url=new URL("../icons/jewelry.svg?v=923c0497ffbb4265fc52a34fe28ecede27e30d5c4b32fccc5487248d29022c4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
