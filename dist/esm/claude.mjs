export const name="claude";
export const id="dl_517fd2dcfec24d4e9280";
export const url=new URL("../icons/newd7/claude.svg?v=ce76dd5a120d99d4f99f4edf0dee42aafbe41a3099f94877e423505fb0e92031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
