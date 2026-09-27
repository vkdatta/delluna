export const name="no_backpack";
export const id="dl_1afc5430e35125d5a32d";
export const url=new URL("../icons/no_backpack.svg?v=2106f1fdd0c2bd9aa422f0158e2f2917fa802e8e5812655d6fa7cb4c7061a873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
