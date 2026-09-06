export const name="gender-nonbinary-light";
export const id="dl_5dea611bbbc7480c9b69";
export const url=new URL("../icons/gender-nonbinary-light.svg?v=2179014ea548c86e9d7440fd9cde3a39490905cf3666dda04ad791cdcacfadfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
