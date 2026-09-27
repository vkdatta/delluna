export const name="hevc-fill";
export const id="dl_efa7a6f2fe9c80fe0744";
export const url=new URL("../icons/hevc-fill.svg?v=cd98fa11dc2a93ea657937c8c50397804ebb014995a6da39c96237a61910fb02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
