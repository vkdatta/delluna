export const name="movie_edit-fill";
export const id="dl_0591bef5081f4b14a771";
export const url=new URL("../icons/M/movie_edit-fill.svg?v=c1e2578c04ae273732d13142467b7bcd53411ecb7dfa0cfa323b61d8de714c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
