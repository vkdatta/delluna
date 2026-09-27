export const name="language_us_dvorak-fill";
export const id="dl_c4960d1f79d15d30d5f0";
export const url=new URL("../icons/language_us_dvorak-fill.svg?v=4f1164619c05ad9e5448203cf50a6776cf779dff7bb5bb8a46031f5b1144e89a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
