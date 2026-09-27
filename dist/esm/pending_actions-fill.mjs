export const name="pending_actions-fill";
export const id="dl_3752677c2eb35ba9c733";
export const url=new URL("../icons/pending_actions-fill.svg?v=0d05cb9a1ee1215a74c0b1cbe02e2186d312e38bee254e4af75106d3229e3e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
