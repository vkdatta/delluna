export const name="sword-bold";
export const id="dl_b2084f98c339ef8cff2b";
export const url=new URL("../icons/sword-bold.svg?v=7ea6beb53c6b36023e769637809e3239bf476b47f17c9dad300b042b65f02893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
