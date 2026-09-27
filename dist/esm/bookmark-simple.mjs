export const name="bookmark-simple";
export const id="dl_db4d186fa39a466c996e";
export const url=new URL("../icons/bookmark-simple.svg?v=8ec4c3fe2e3211bbcfa7955c1e7d0fecfae37a42dfa612c8269d393ba03fd1e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
