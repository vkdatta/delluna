export const name="megaphone-simple-thin";
export const id="dl_8a765932f8894be5bc59";
export const url=new URL("../icons/megaphone-simple-thin.svg?v=a9684050f7b5bc9499a1d6042c6fc6106af1a6e266799cc66619562101a12748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
