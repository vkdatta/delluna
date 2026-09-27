export const name="lucid_2-file-scan";
export const id="dl_25a004aa170040e3bd8a";
export const url=new URL("../icons/lucid_2-file-scan.svg?v=8e9e52acb27dd4c6d5bb9d817c017433997f39fc0e1a6c07b8a13b700e6c9134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
