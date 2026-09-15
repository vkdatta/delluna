export const name="bookmark_star-fill";
export const id="dl_8bf108e0238d4b2aa64d";
export const url=new URL("../icons/B/bookmark_star-fill.svg?v=78786cf202b3217d6bad30f9e00f2f407da469ed24781e5ceab5b465ff2ba3c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
