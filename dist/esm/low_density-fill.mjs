export const name="low_density-fill";
export const id="dl_1488c7ddb72f190cc2a8";
export const url=new URL("../icons/low_density-fill.svg?v=30aac162f32c6bac5dfada47319f9aa50c868989f79ff5db62a68f3d3db8bdd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
