export const name="lucid_1-chevrons-right-left";
export const id="dl_05275c933dfc4370b152";
export const url=new URL("../icons/lucid_1-chevrons-right-left.svg?v=4a6f7ba76886c93852bea0cf7740ec9c1a2bf23b7ce548beccf44cc6b242605c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
