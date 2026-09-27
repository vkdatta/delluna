export const name="playlist_remove-fill";
export const id="dl_90f8504ae9e79dec5eda";
export const url=new URL("../icons/playlist_remove-fill.svg?v=f7acb8bf3f7733dab7fa317558def7add067be53f1cd2ce1a6525d5452595a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
