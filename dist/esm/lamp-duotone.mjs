export const name="lamp-duotone";
export const id="dl_7f8b32369348462ca101";
export const url=new URL("../icons/lamp-duotone.svg?v=6dad2476af5dd830c564b93ed988991d7ef733337a71060f1e4af113cbbe29e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
