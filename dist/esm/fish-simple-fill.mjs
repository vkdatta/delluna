export const name="fish-simple-fill";
export const id="dl_24d5b383561541c487d3";
export const url=new URL("../icons/fish-simple-fill.svg?v=585c430b7648eacb2f4bc22b14ea6a2dc4e6e5869d6ebec8288a6d25183fb6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
