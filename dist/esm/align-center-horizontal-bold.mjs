export const name="align-center-horizontal-bold";
export const id="dl_e8abe797c4ba433cb943";
export const url=new URL("../icons/align-center-horizontal-bold.svg?v=edb26ad566097a903ac391bdb73bc99d1ea33d4625023df742079e1217fd5d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
