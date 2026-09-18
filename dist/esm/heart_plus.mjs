export const name="heart_plus";
export const id="dl_1d02cc3b60534ddd8406";
export const url=new URL("../icons/heart_plus.svg?v=7ceb02f5457598c72ded7a08018149403d9b4cee2cf30c0cc5f3f233f820c712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
