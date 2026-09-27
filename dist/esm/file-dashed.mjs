export const name="file-dashed";
export const id="dl_4ec3306f2bf145f59584";
export const url=new URL("../icons/file-dashed.svg?v=68b4a1e8fe3117a81b631fcdcc476e6e6fbb493ec12dc70db6d7c68ab622f0b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
