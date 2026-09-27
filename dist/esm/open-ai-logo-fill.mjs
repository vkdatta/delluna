export const name="open-ai-logo-fill";
export const id="dl_cebdb1e2615442d89ecb";
export const url=new URL("../icons/open-ai-logo-fill.svg?v=4e9d4bcaa8828848b3521224337ba400527d311614b7b8a7f1c4ed6ddf255390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
