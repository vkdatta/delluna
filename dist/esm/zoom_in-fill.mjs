export const name="zoom_in-fill";
export const id="dl_c8ca14712bad42e78fb6";
export const url=new URL("../icons/Z/zoom_in-fill.svg?v=02707959d9d361bc08400d6472889996e28c4bb5e8da15bd96d4f90711462847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
