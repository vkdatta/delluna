export const name="cricket-duotone";
export const id="dl_1f6f447a09dd48f8a8b3";
export const url=new URL("../icons/cricket-duotone.svg?v=b99acb16debb2af4604ed26c332d7ee5a409f237995bda6bf40e914c9ed18a9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
