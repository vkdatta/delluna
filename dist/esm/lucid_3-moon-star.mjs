export const name="lucid_3-moon-star";
export const id="dl_e8108b90f36b4802a2fb";
export const url=new URL("../icons/lucid_3-moon-star.svg?v=e17bf66e43838a84a1247f94ab2e6c68935c18c3f059bed322dd1592dbbd860f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
