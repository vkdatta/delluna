export const name="auto_stories-fill";
export const id="dl_4d8a17b4bcd744034308";
export const url=new URL("../icons/auto_stories-fill.svg?v=8b42affe327a1b3809e145e9465d1f41f443de3775e32f4087afb3d54fd341ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
