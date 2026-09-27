export const name="heart_check-fill";
export const id="dl_6b67ba84408009e2dca0";
export const url=new URL("../icons/heart_check-fill.svg?v=267a538c32b5e9136ff36172eea6c356c3fc8a783245bbf82c83e2fcabfb3e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
