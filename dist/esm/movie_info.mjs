export const name="movie_info";
export const id="dl_ddb7b6c92d5e5eff3519";
export const url=new URL("../icons/movie_info.svg?v=50664a972399c60ca0ab244cdbdb09bb8bb1fa4d2b81ef70fdb021e7064519cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
