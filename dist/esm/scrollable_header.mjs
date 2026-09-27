export const name="scrollable_header";
export const id="dl_a5bdff2eb193c0e71f20";
export const url=new URL("../icons/scrollable_header.svg?v=d6cc8c0fe5bd3c414ee8947fc542497a715b21a9680a86f38ccb0525a1fa892e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
