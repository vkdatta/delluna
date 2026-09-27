export const name="apps";
export const id="dl_fcc2ca335c731b35c959";
export const url=new URL("../icons/apps.svg?v=4f4a484969eb23395fc6c7755e7b7e4d760da76841df3f671c13e3f526ed65c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
