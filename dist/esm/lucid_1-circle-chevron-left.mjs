export const name="lucid_1-circle-chevron-left";
export const id="dl_7b84c9ee66c342c5a257";
export const url=new URL("../icons/lucid_1-circle-chevron-left.svg?v=5fd44cc1aeb586cc5ab2d98baaa1f17df853a4cb9bc1a2370a787ce8959f8e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
