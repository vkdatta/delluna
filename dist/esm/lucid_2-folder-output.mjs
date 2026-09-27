export const name="lucid_2-folder-output";
export const id="dl_d3ed441724204107b422";
export const url=new URL("../icons/lucid_2-folder-output.svg?v=23e80ab8f712bee9eb8404bed847d8a58cb89ee07b45120bed4b15ebbdfb40a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
