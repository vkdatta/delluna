export const name="lucid_1-banknote-arrow-up";
export const id="dl_0b02d99570dd48a39a7e";
export const url=new URL("../icons/lucid_1-banknote-arrow-up.svg?v=d7957a3d8d1682f3b984d9062c26dada7029e0d265186d630cd63ae2be9d633a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
