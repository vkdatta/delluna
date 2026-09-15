export const name="brightness_4";
export const id="dl_1bebe6be3d6d4b2bae0c";
export const url=new URL("../icons/B/brightness_4.svg?v=464d1799120619340061d65e802786d51ec6bb11e613efbf902e736666946003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
