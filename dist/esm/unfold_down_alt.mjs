export const name="unfold_down_alt";
export const id="dl_ee34d961bd714594a2d6";
export const url=new URL("../icons/all_60_named_svgs/unfold_down_alt.svg?v=1fdcfaa96905e2d394c1a43389e159195622457cec3567b3d46af06e843c5a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
