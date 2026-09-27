export const name="linktree-logo";
export const id="dl_06ff3d16238440bfabdd";
export const url=new URL("../icons/linktree-logo.svg?v=fb736e2e42c940ed64d95815bcb852566bbe970305115ba7a761837e759b912c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
