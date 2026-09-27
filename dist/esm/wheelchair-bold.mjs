export const name="wheelchair-bold";
export const id="dl_cd6312716a7e132124ab";
export const url=new URL("../icons/wheelchair-bold.svg?v=0e327ec5f6ddfb01854ae99f73feea30ceca74877f8d7045082b568864da0e1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
