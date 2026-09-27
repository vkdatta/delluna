export const name="hourglass-bold";
export const id="dl_1aba6eabf17647218ce8";
export const url=new URL("../icons/hourglass-bold.svg?v=1214fe13f048b61119374b6ba4a22e7367d5d7735e87555edc5d5cf063728790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
