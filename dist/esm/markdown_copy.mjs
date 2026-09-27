export const name="markdown_copy";
export const id="dl_dde4a6d640a948e621b3";
export const url=new URL("../icons/markdown_copy.svg?v=b70aad748e660b44b33435f2a3eecb2c4d9de318714d42e5901c875d73ca40df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
