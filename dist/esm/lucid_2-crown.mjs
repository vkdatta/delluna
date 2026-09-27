export const name="lucid_2-crown";
export const id="dl_814b15d2672841dfb73e";
export const url=new URL("../icons/lucid_2-crown.svg?v=622efd96fa1da3135f569ed8d8d4082da9d531ba47e5029c22bceb2ec0912d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
