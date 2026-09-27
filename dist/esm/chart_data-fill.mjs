export const name="chart_data-fill";
export const id="dl_af4d9509e96125753d9b";
export const url=new URL("../icons/chart_data-fill.svg?v=3185f586fb5964fd1e212166eea05650c7db0e7f2f8a553c0b3f40f15b963718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
