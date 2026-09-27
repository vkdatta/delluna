export const name="circles-three-plus";
export const id="dl_5d370a495ced4d459a18";
export const url=new URL("../icons/circles-three-plus.svg?v=a91beaf812c4cb1d854e2cef3170bfb425b0ddc083c24cfccace9ff436dc4dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
