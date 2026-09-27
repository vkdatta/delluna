export const name="lucid_3-square-centerline-dashed-horizontal";
export const id="dl_31bf86d656234bc38f80";
export const url=new URL("../icons/lucid_3-square-centerline-dashed-horizontal.svg?v=10c70fb1ec0e820ae5c0b68562c71e49a38d7c402920d4179234d3754493f310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
