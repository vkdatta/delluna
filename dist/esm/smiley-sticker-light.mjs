export const name="smiley-sticker-light";
export const id="dl_833cff38a6bfbf6d05e2";
export const url=new URL("../icons/smiley-sticker-light.svg?v=029601ab4583022a42d8b804e64a08799639c8d7eb97e2117afb500c8fed9c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
