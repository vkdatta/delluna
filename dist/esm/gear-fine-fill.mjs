export const name="gear-fine-fill";
export const id="dl_38444a744fcc4c24bda9";
export const url=new URL("../icons/gear-fine-fill.svg?v=60d6787684da7b69aebef9fdb9c223fc2141762018630e9d753bc70770baf01b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
