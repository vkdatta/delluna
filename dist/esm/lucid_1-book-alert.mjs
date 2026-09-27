export const name="lucid_1-book-alert";
export const id="dl_7ad09abb75204bf4b514";
export const url=new URL("../icons/lucid_1-book-alert.svg?v=f0cf8dc34cf4ed008ed4da7044faa2aec28e559bbb598a46d11db115ce7ab783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
