export const name="file-txt-duotone";
export const id="dl_da13f64d0e9f4eb09bc6";
export const url=new URL("../icons/file-txt-duotone.svg?v=04fe15689506509022a4fd8c1ede04e826f791dc0feadb7bc5802bf85c8a7d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
