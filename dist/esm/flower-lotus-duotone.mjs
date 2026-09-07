export const name="flower-lotus-duotone";
export const id="dl_1144d8ab1f1344e0b649";
export const url=new URL("../icons/flower-lotus-duotone.svg?v=47710c34f8fc729f36a5b8e36f6afe5639d640daac1fdd727ccff92c0bfd418d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
