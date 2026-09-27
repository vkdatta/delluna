export const name="unknown_2-fill";
export const id="dl_aa15d46945221bb6fd3f";
export const url=new URL("../icons/unknown_2-fill.svg?v=ddc60fca591a6221a1613d4f96e17be7bda72b8cc9a6c4aff79c8db63c3ff636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
