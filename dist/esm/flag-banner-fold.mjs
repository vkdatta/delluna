export const name="flag-banner-fold";
export const id="dl_47e4264ca9cc4d46a9fb";
export const url=new URL("../icons/flag-banner-fold.svg?v=b422757331fb531ab65ebea4311470708e18adb17ea1c5956ea884ffabbe94d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
