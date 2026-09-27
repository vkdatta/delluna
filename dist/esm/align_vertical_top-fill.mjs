export const name="align_vertical_top-fill";
export const id="dl_b50e95e785cdaee3894b";
export const url=new URL("../icons/align_vertical_top-fill.svg?v=b922449906c3f37ac6318ab802b708f811ea0e8a33d7ffceb12eee396c50b1c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
