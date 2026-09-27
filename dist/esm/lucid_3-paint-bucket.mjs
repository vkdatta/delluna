export const name="lucid_3-paint-bucket";
export const id="dl_af9c4b62b462423b8feb";
export const url=new URL("../icons/lucid_3-paint-bucket.svg?v=a7abe20530036419588fc86a1b133db3837ed94a7b8c50be991cb966d5a6c38c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
