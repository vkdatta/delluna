export const name="lucid_3-sliders-vertical";
export const id="dl_da942087129b419a81a4";
export const url=new URL("../icons/lucid_3-sliders-vertical.svg?v=f3ca806dbcc1b93ae033fabb787226446b804d6e0d0ec26df6d58aa5370324a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
