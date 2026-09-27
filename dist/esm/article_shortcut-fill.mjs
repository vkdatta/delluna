export const name="article_shortcut-fill";
export const id="dl_5bc85900b455808a721f";
export const url=new URL("../icons/article_shortcut-fill.svg?v=182de04ebec381026b956f1f457c6de3f90d48d6f9ca9ff82ccdaa9306247dcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
