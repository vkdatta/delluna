export const name="file_copy_off";
export const id="dl_85f2ee0d4ce10bb51b86";
export const url=new URL("../icons/file_copy_off.svg?v=54d193985a963960b1743242040704954a9f1af8ec8c761f11b762141ed415d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
