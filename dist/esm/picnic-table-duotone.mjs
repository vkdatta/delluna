export const name="picnic-table-duotone";
export const id="dl_a262535457f144ca93d7";
export const url=new URL("../icons/picnic-table-duotone.svg?v=f5832d77927b4b748d6998101ec0ac1b42afafd8827e1eb6ca235429456ea6f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
