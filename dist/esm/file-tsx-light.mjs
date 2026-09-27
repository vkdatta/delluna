export const name="file-tsx-light";
export const id="dl_8c33f5bb360443bba181";
export const url=new URL("../icons/file-tsx-light.svg?v=8b2521e203c633d04dbe61b24e0f9c2b4dfb366be31c1fdd66330f6afa876f13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
