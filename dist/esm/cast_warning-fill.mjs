export const name="cast_warning-fill";
export const id="dl_8dde60b42cece3f624e6";
export const url=new URL("../icons/cast_warning-fill.svg?v=b4e68a60e27e4b6eda9a6aa0dfa6af4984bb7502ece46a423448040179eb64c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
