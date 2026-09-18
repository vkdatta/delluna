export const name="japanese_curry";
export const id="dl_59e992dfec044a16aa63";
export const url=new URL("../icons/japanese_curry.svg?v=1dc1eb52b4821989395eb7921f73d1112276604806e4fb3d765dd01e109de01d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
