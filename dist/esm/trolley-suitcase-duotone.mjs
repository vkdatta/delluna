export const name="trolley-suitcase-duotone";
export const id="dl_d163420c9be0c14e60cf";
export const url=new URL("../icons/trolley-suitcase-duotone.svg?v=052ec0fe3f1ff093a2676fc0123b0969cf5dc547a7722690b5d462fe16f05e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
