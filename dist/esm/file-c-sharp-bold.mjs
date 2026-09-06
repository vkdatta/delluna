export const name="file-c-sharp-bold";
export const id="dl_b6d80a1499ae4f4d8a66";
export const url=new URL("../icons/file-c-sharp-bold.svg?v=d977d66009f73754e2bbffc074ed5a7c8293e250c06fdf4dfa1e683391885745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
