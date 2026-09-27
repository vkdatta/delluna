export const name="hourglass_pause";
export const id="dl_1ee429bb215215441de2";
export const url=new URL("../icons/hourglass_pause.svg?v=87336a25ac8051b2e13ee04eb0bb408a54ef2e835b015bedaccec4549f1396f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
