export const name="bookmark_bag";
export const id="dl_7c1e0ce0d9c34f96864d";
export const url=new URL("../icons/bookmark_bag.svg?v=7cc8c5d920e1fdceb827e8c931a7355181ec32832dfd0d7732becac1d940d8e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
