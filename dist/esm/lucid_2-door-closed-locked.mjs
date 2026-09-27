export const name="lucid_2-door-closed-locked";
export const id="dl_8a7aeb10189249758321";
export const url=new URL("../icons/lucid_2-door-closed-locked.svg?v=8ccfd43d518228ea1d2c2aae5d79abffe425f1a50a5bdfa2cb3815eab37a8ae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
