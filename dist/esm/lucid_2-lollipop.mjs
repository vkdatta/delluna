export const name="lucid_2-lollipop";
export const id="dl_171591a433b24eaa9578";
export const url=new URL("../icons/lucid_2-lollipop.svg?v=c2f434e09a1854dfcb58baa6a41fec05408fa3271c524656fe7501fdb0d16f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
