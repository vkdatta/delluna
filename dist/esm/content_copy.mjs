export const name="content_copy";
export const id="dl_ad0104d843ff6ffe8b67";
export const url=new URL("../icons/content_copy.svg?v=8b95fda94ba8761ce6e8d4bbbfb82c8ca3df04d413c3ed4c1b0fbb6d0d13fae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
