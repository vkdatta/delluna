export const name="lucid_3-square-chevron-left";
export const id="dl_dd23973757a046309be3";
export const url=new URL("../icons/lucid_3-square-chevron-left.svg?v=16280842fba6c3ecac4def9080662a03e25a54a7d49767392538df227f4dea43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
