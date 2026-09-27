export const name="lucid_1-bottle-wine";
export const id="dl_049ef70374624d54a559";
export const url=new URL("../icons/lucid_1-bottle-wine.svg?v=6826deb86ffbcdf1043b85306d3b23cf3f9f20ae31f60799ae9056cf23da6e6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
