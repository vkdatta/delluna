export const name="mouse-light";
export const id="dl_7edebc1741654673951b";
export const url=new URL("../icons/mouse-light.svg?v=0ad170d77fdcdf8763200abda81b4de6cc50351fd4af03c0cec998ece19c41df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
