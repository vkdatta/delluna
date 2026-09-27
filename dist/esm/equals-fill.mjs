export const name="equals-fill";
export const id="dl_ef04cd1f2b004a34b3e6";
export const url=new URL("../icons/equals-fill.svg?v=1f40f5910198c1ec0a000f046e84994956621af9630285e9f6ffac33456b293c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
