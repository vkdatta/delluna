export const name="bag-simple-duotone";
export const id="dl_9bb5f4ce08224750b3fd";
export const url=new URL("../icons/bag-simple-duotone.svg?v=3b47924a856f1bfd14d4cf7ea52595502b89c8d779fa7806172c4461035bb372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
