export const name="not-subset-of-light";
export const id="dl_39eced04b95c48eba82a";
export const url=new URL("../icons/not-subset-of-light.svg?v=b908ca9bef1c659c9efc499eb8e52be5ff91bf0cf7859c4755af62b8c3dc50ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
