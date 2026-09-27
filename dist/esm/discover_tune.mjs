export const name="discover_tune";
export const id="dl_c108d45eaa3cb5ecb4e8";
export const url=new URL("../icons/discover_tune.svg?v=7445ccbbeb3abfbfb982ae484e7b0f8c7b2a0fce9f47a827da99b617af65de58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
