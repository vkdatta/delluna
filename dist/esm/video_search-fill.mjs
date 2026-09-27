export const name="video_search-fill";
export const id="dl_93f943cbd667c423a6cf";
export const url=new URL("../icons/video_search-fill.svg?v=7a1a2f21a6036b5ade6ee2d3e9b9ae6fd1e92a2a42efca478a12a3027e42d32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
