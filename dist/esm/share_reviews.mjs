export const name="share_reviews";
export const id="dl_baa6f8b57d3d5c441415";
export const url=new URL("../icons/share_reviews.svg?v=55692f90f425fe72239a42bec49be4848ad715b25264c96125a87746da0e6570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
