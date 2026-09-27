export const name="bookmark";
export const id="dl_a93eb90c9c75e18b3a87";
export const url=new URL("../icons/bookmark.svg?v=cddf213266848ba982af45c493e3d6ae80046f36fab32c8ecd24cfc1f46c2dbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
