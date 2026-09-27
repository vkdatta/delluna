export const name="brush-fill";
export const id="dl_8b7964d6a4682c97d79b";
export const url=new URL("../icons/brush-fill.svg?v=dd81dd2043c96a3a3a247dd6e308cf6817065a4914a384561fcc4f67ce9253b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
