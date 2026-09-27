export const name="padding";
export const id="dl_42d83e2831ceb1c52041";
export const url=new URL("../icons/padding.svg?v=6bcbdb722bd7a9a331fa47ac824c68333a2dd714350c78dd0bb3819e497103b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
