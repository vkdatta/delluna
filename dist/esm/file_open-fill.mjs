export const name="file_open-fill";
export const id="dl_c964a6784934ce2d4301";
export const url=new URL("../icons/file_open-fill.svg?v=d5e97185201a662b11f934002a2c0dbc9a5bb9b42d85896b1e728db452116bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
