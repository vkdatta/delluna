export const name="file-audio-fill";
export const id="dl_6dbc9c30df7c4e5e8e4c";
export const url=new URL("../icons/file-audio-fill.svg?v=245064b9af87a2e9e1d1d2c76a16f8d5bc31609440ecd221fab8fc978e0f4ee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
