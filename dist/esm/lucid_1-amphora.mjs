export const name="lucid_1-amphora";
export const id="dl_7aa6e1e92d324d059fd5";
export const url=new URL("../icons/lucid_1-amphora.svg?v=4fe24c366dd9403d1517f4360a03b48c43cddd7946905e52ed42179646ee78f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
