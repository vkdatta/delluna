export const name="stamp-light";
export const id="dl_06266fb84e24247ea052";
export const url=new URL("../icons/stamp-light.svg?v=70b9d995860633f197fa58150f94361826ba67655a3f85fee51962f8eea61a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
