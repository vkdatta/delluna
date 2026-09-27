export const name="globe-simple-x-duotone";
export const id="dl_7126440fb22e471cade1";
export const url=new URL("../icons/globe-simple-x-duotone.svg?v=c8f205755e2a14e43e130cd1b50f0155eb4972fe6e2bb13c5a7dc48dfe7e68cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
