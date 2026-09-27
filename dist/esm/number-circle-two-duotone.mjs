export const name="number-circle-two-duotone";
export const id="dl_52c9e8e674984759902d";
export const url=new URL("../icons/number-circle-two-duotone.svg?v=d8692a81c4e617624611cf0c4bd017b0e0303b57c9786ea2e0da05dee63e4bfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
