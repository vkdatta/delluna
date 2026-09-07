export const name="tag-fill";
export const id="dl_59bad61d380746e590e5";
export const url=new URL("../icons/T/tag-fill.svg?v=e47e31e6769f655f8a58ad4d243c6fdba13902b02eb70fa3126e58d9b5febb5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
