export const name="git-diff-thin";
export const id="dl_c84f088f57d3493e8345";
export const url=new URL("../icons/git-diff-thin.svg?v=957d0c571a8d106e8f585391c790faa726138995e7b94c1735fbabc6add1ed15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
