export const name="lucid_1-chevron-up";
export const id="dl_a48732026acd4dd6adb3";
export const url=new URL("../icons/lucid_1-chevron-up.svg?v=43f1b0c5762bd902568918cac85a755512693c56e25f19371398a65a8f889a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
