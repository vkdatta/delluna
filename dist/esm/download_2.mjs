export const name="download_2";
export const id="dl_1f91db7e3fb946878b89";
export const url=new URL("../icons/download_2.svg?v=138d3da188272cb2c55ddf0bf2c29ea8a5081d74cd2d1fdceb00c7c896d8c839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
