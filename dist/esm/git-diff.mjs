export const name="git-diff";
export const id="dl_a1588c6899e74fbc8f4d";
export const url=new URL("../icons/git-diff.svg?v=0898cbae4046127a7d0c5df9435d623a2c4fbb7a4477768c1e81fa58895b4e52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
