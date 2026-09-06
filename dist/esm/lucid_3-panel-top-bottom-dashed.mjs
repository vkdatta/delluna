export const name="lucid_3-panel-top-bottom-dashed";
export const id="dl_f414ff825a9d4b9d8656";
export const url=new URL("../icons/lucid_3-panel-top-bottom-dashed.svg?v=0af544acbde6c237012ff955f41db7f927837829a119f166a34b93829c2fc7bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
