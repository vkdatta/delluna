export const name="bug-beetle-fill";
export const id="dl_5f6f3396a86b4db3bd6e";
export const url=new URL("../icons/bug-beetle-fill.svg?v=083e5bc28dae57525c7bd4e129937724febf4d2e0bbc202f361ecad1a12d8e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
