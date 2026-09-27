export const name="cast_connected-fill";
export const id="dl_ffcf3ecb567a4286a7a7";
export const url=new URL("../icons/cast_connected-fill.svg?v=fbbf1742efde65b164994a3b0f55c76e44b03d937f0cb8a7529265569f8f5ca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
