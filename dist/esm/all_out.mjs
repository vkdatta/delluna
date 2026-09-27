export const name="all_out";
export const id="dl_c0faf800f7e202602694";
export const url=new URL("../icons/all_out.svg?v=66006bf43c8ee8b0bdae8d1b9f6c84a83dbde82b4ec0ae86ce7647796fb69e7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
