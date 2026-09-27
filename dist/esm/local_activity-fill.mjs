export const name="local_activity-fill";
export const id="dl_d5738dac67d2e006ddda";
export const url=new URL("../icons/local_activity-fill.svg?v=0ce93b2978d5958ee41c0a69ae293093e6563b838fca39b4e6c2d704ddf826c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
