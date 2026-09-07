export const name="football-light";
export const id="dl_cac9ea24158b40eeb2a0";
export const url=new URL("../icons/football-light.svg?v=7243cefa2381b32a5df348f563dcc837bc2af6145de85f6bc68c60fa7ef32c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
