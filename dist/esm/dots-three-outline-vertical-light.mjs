export const name="dots-three-outline-vertical-light";
export const id="dl_47477a2409eb41c58957";
export const url=new URL("../icons/dots-three-outline-vertical-light.svg?v=84f62fceb09159cd13719e86ec89c24aa84c19ae54cae319e2b6263f8b50706a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
