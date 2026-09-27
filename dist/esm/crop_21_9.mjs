export const name="crop_21_9";
export const id="dl_6582dd19c48b0bfeca1f";
export const url=new URL("../icons/crop_21_9.svg?v=e4b9e2632763fc85cfd41183f904b8791983f7c28831cc3be18e2662cb311ae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
