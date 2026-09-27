export const name="lucid_1-citrus";
export const id="dl_5a0bd832a20940428e7a";
export const url=new URL("../icons/lucid_1-citrus.svg?v=b90a1ecce561fe3d83dea87be1dadf8ff1d7ab609a5ee2dc77c4f3ebba1c029d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
