export const name="signpost-fill";
export const id="dl_c8f386ee7a9ccd1ffb55";
export const url=new URL("../icons/signpost-fill.svg?v=21dafade4d46276a4e8baa23f2d5c5b03057096d6f7168e81c65a4253a220bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
