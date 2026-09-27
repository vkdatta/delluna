export const name="lucid_1-book-text";
export const id="dl_638701c14ca6425e9f30";
export const url=new URL("../icons/lucid_1-book-text.svg?v=5d81e3861d72337dce220f968606420484a78f25e59aca6f53031e19f8295621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
