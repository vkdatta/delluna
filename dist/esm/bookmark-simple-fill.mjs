export const name="bookmark-simple-fill";
export const id="dl_0e9fecd77f6e4d2e9af2";
export const url=new URL("../icons/bookmark-simple-fill.svg?v=75bfe9f4cacd0bf9041acef17eff3dcc8d763c47ed0b3850fe87d39069d7bf88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
