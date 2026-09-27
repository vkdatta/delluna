export const name="lucid_1-a-large-small";
export const id="dl_d7df4a25e0b74b889a2d";
export const url=new URL("../icons/lucid_1-a-large-small.svg?v=ae47e86020400b9d4eae33179ab057314549abfd2c85ba41c71b9db02de634d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
