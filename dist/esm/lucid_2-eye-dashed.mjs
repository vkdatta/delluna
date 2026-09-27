export const name="lucid_2-eye-dashed";
export const id="dl_d92020db37c844a285a5";
export const url=new URL("../icons/lucid_2-eye-dashed.svg?v=b5bb359d189cba6edcb85ee64a4d2505b459157f0161a8ff51904d389e765894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
