export const name="lucid_2-file-symlink";
export const id="dl_5960ed121fe44a2384a1";
export const url=new URL("../icons/lucid_2-file-symlink.svg?v=0b62eea2f87df9d4774f98a66ba8801153b4e08826f0a4d8737f1e0fa9e00096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
