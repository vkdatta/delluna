export const name="movie_info-fill";
export const id="dl_3c9dbafd9d483deaa854";
export const url=new URL("../icons/movie_info-fill.svg?v=b0f5a0eb1f500c788a545057e77cf42bdcffdac71a47836a9f384e21332bba86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
