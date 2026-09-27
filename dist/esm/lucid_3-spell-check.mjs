export const name="lucid_3-spell-check";
export const id="dl_ea6fec624314414d87c8";
export const url=new URL("../icons/lucid_3-spell-check.svg?v=f0043f319e23bd2a9fa41ae67c2ec633d79642bc533a2891ce925768159e1634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
