export const name="lucid_1-book-marked";
export const id="dl_5381806f8b764150b3a7";
export const url=new URL("../icons/lucid_1-book-marked.svg?v=5095eaa79cf7852953f5efd7dbc41c8c9dfcaf3cbbfc43f5f42d2f0a1c0c3768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
