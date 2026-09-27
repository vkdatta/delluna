export const name="suitcase-simple-thin";
export const id="dl_612392941d2a8e5a4e9e";
export const url=new URL("../icons/suitcase-simple-thin.svg?v=5507bd5e5b90d3cf49be8c8edd88656b8254b9e3db2f5a65f73b40a82a082f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
