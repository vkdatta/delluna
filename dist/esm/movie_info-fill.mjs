export const name="movie_info-fill";
export const id="dl_ad22b5d4eb26cbfc8518";
export const url=new URL("../icons/movie_info-fill.svg?v=b3fb910999758c2c68116e617cc8c4dc15de3bbef611f04ba6248226a1088d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
