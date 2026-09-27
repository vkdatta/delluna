export const name="lucid_2-folder-open";
export const id="dl_fdf9e76875f74e1b83a2";
export const url=new URL("../icons/lucid_2-folder-open.svg?v=b4acb985375516c6019944d8f5a86aaf2a7cd12e1127629a762d8df8e68c391b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
