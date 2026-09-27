export const name="lucid_1-chevron-up";
export const id="dl_a48732026acd4dd6adb3";
export const url=new URL("../icons/lucid_1-chevron-up.svg?v=468feabe67c60898a9ae75e8482c1399f533a9131919631ded03e08d781ef7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
