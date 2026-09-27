export const name="file-csv-bold";
export const id="dl_281d6f171a3440a0b86a";
export const url=new URL("../icons/file-csv-bold.svg?v=ce342841468e020f44e5096b93e22f26f0d36226212021c6b20e9a67db06446b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
