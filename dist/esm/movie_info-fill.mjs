export const name="movie_info-fill";
export const id="dl_a53ca1126bdf4580a056";
export const url=new URL("../icons/M/movie_info-fill.svg?v=9d4c600fb00c3ca14ee5b2c5644d700ced584e227214974478cc8f9ba568066a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
