export const name="stat_2";
export const id="dl_343b209a9feabd6b5dc1";
export const url=new URL("../icons/stat_2.svg?v=a56bab4fb9bdedc1fbb91f7e907678dbd91c18f58f535372922d57142dcc55f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
