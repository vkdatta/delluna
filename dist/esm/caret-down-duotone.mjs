export const name="caret-down-duotone";
export const id="dl_4dd9fd34f5bc4e258adb";
export const url=new URL("../icons/caret-down-duotone.svg?v=aa0e8ec25a52ab435301fde375e0d46c358adcbf5843934e2fc3593c88d10121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
