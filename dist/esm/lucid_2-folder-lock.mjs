export const name="lucid_2-folder-lock";
export const id="dl_13f4e6a09d574b52aba5";
export const url=new URL("../icons/lucid_2-folder-lock.svg?v=843a1f51335a304f53223c812d8a4882617428a528ed4ad939e1cc374603ca05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
