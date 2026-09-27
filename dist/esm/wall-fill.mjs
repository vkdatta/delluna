export const name="wall-fill";
export const id="dl_aa3d5a6ef895573a736f";
export const url=new URL("../icons/wall-fill.svg?v=ef7f959debcb382b449c09124719c4e9673993d7c72e27262a1f529b97651678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
