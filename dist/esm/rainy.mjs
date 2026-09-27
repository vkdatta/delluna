export const name="rainy";
export const id="dl_e46bd1ab79aca53d3d86";
export const url=new URL("../icons/rainy.svg?v=a4578afcdd8b76908e58d51ad5db538c3d067d7bec369abefa2c8dfe54ee1a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
