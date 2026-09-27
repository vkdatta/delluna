export const name="behance-logo";
export const id="dl_a426b97a79204064a23d";
export const url=new URL("../icons/behance-logo.svg?v=a18ee15e37383085524f8679effee56042af4b93fe888fc96c5c8c314cb8285e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
