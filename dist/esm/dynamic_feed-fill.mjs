export const name="dynamic_feed-fill";
export const id="dl_45dae68be3568071084e";
export const url=new URL("../icons/dynamic_feed-fill.svg?v=b058372da62d0e33dc2f6174f16d74f3356d583e7cf0cede5444a852ca446b5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
