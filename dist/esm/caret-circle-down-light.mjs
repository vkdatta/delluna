export const name="caret-circle-down-light";
export const id="dl_e81311ba1b374b05aa59";
export const url=new URL("../icons/caret-circle-down-light.svg?v=170a0907a429de995fd799f82db0998a5689f17c9582eced5d00c57a7a1cb20f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
