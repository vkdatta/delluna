export const name="width_normal";
export const id="dl_2b799cd6671e5c0f2c2d";
export const url=new URL("../icons/width_normal.svg?v=cbd7f2111285ad9368e773a6d47d9f29d17960691568ac55730e96bb3cf6a1a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
