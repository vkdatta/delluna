export const name="oral_disease";
export const id="dl_adf320a21ef92df5d117";
export const url=new URL("../icons/oral_disease.svg?v=ad80509516d8eb46073545ecba64269ae11e2fe56550206b548240b624425554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
