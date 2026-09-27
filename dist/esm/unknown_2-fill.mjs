export const name="unknown_2-fill";
export const id="dl_49112cae4ed847e744e2";
export const url=new URL("../icons/unknown_2-fill.svg?v=0fb4ae56e9838028445d5b598d4ef0e398249f9f0a3f873cd365333b93e04b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
