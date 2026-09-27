export const name="bookmark_star";
export const id="dl_df47168c0c48fdd2a62b";
export const url=new URL("../icons/bookmark_star.svg?v=edd7555eb10fdb9f9aa8752cfdf12b5169bc13abc6ae80c2ca96941c8d762cd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
