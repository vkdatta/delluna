export const name="error_med-fill";
export const id="dl_c16181a1f3cb1a63c1d2";
export const url=new URL("../icons/error_med-fill.svg?v=8f3fdcdbfe09bd6c8aeec124d56080b008fcc5a20cdbe2330b421dbc7c04d5ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
