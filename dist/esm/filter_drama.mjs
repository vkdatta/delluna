export const name="filter_drama";
export const id="dl_9d1f1d6471844204821a";
export const url=new URL("../icons/F/filter_drama.svg?v=4f41162d7c1d6f9d5f046ffda0898cabc9fef44a0abb0c3f2cf6a33d83960a0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
