export const name="lucid_2-external-link";
export const id="dl_0ce48f8d80cb4e6b85b0";
export const url=new URL("../icons/lucid_2-external-link.svg?v=9b2f8a81fad092a4f3b5b313ddc4866a9460cd07641bc31f8735d42f48f7f3c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
