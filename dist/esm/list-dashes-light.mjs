export const name="list-dashes-light";
export const id="dl_5fb8e71ed615443bae3a";
export const url=new URL("../icons/list-dashes-light.svg?v=0ccf6d941df0f5382bbe1af178ef138f553d49a80ea1cb05f96b771cf5803b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
