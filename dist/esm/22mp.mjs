export const name="22mp";
export const id="dl_fe2ca08f09065d7a628b";
export const url=new URL("../icons/22mp.svg?v=97d0903450c4dcb94c96c3e91ef7661ed197788f874c6600f317331a090286d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
