export const name="done_outline-fill";
export const id="dl_b9cb9bd8b0384c564305";
export const url=new URL("../icons/done_outline-fill.svg?v=8be7b26c623aade25a7a354b210b1d6d23bc5165bb3ca6da569423ac038a370d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
