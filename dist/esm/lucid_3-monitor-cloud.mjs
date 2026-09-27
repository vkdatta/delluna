export const name="lucid_3-monitor-cloud";
export const id="dl_d98e00a343c4418bb11d";
export const url=new URL("../icons/lucid_3-monitor-cloud.svg?v=88b123f2866c10e0deb561d88556f78eeb8c52017ae64e80f94c1dcaf14420ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
