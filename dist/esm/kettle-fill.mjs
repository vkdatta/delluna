export const name="kettle-fill";
export const id="dl_398d415c6cfa789c35f3";
export const url=new URL("../icons/kettle-fill.svg?v=8e6b39dd58c57fcb5d6672f666293e5bb095c2287115d48f18473c80ce197b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
