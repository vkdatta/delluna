export const name="fire-extinguisher-fill";
export const id="dl_4515b7b2bfcb40a3adce";
export const url=new URL("../icons/fire-extinguisher-fill.svg?v=6ce7f1d5ee86881a9490d4eb0f19fdcb91dee25473b44a82893c0bcbf7193e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
