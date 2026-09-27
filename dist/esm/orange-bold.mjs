export const name="orange-bold";
export const id="dl_f9e5a4dba8b8480194f8";
export const url=new URL("../icons/orange-bold.svg?v=79c5ffb94845041e7982d78a7d78a848672f8da81e2a74dbf919ef7cbf78029c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
