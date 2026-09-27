export const name="breaking_news-fill";
export const id="dl_48d9d3e43249da9dc180";
export const url=new URL("../icons/breaking_news-fill.svg?v=d5c87e82256f02c1642d5570b607947870a32e0a3e10568d08758e11250dd22d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
