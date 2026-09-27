export const name="article-ny-times-thin";
export const id="dl_d294c3039e92464f9ed6";
export const url=new URL("../icons/article-ny-times-thin.svg?v=34f560cd15f1a10e2b8c6aa7b8880ec9e7157167a4aff8f39eabee594c4d69dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
