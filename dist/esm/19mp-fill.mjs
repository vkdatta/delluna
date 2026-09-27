export const name="19mp-fill";
export const id="dl_fdeabdba7622d135594c";
export const url=new URL("../icons/19mp-fill.svg?v=2bbde6f4a0be2d5adf7630aaf6e183fb82e42acc3b2fe0aa6c3682c9dcf65027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
