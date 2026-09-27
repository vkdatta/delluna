export const name="align_justify_center-fill";
export const id="dl_f5340a777b43b7bf68a1";
export const url=new URL("../icons/align_justify_center-fill.svg?v=aadc9f970d7563a79e669c15775b07c3fe5f8eef6c85690d9eb669d6a8afa0a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
