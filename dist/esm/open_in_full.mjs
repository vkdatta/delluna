export const name="open_in_full";
export const id="dl_10b44347fa5ee06c243f";
export const url=new URL("../icons/open_in_full.svg?v=e04795514197fda19850252c3262d6bfe5d4942268a16b6813141bc7d0828922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
