export const name="bookmark_remove-fill";
export const id="dl_c5b93cd083c04134a671";
export const url=new URL("../icons/B/bookmark_remove-fill.svg?v=4dfa905f370550b78e25744e7f85e058aff626677fd4e72a1c9f5738d4f59861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
