export const name="search_hands_free-fill";
export const id="dl_07c5e24e542022be3bf1";
export const url=new URL("../icons/search_hands_free-fill.svg?v=624e9fbba4aa23cb227595b484bf252c92c1e9cb1783ee3f1df3a7e82e501319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
