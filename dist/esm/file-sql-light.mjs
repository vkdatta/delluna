export const name="file-sql-light";
export const id="dl_faf89ea8f4b44018b4d6";
export const url=new URL("../icons/file-sql-light.svg?v=6f5df871c4476ec84304ef15a3b4436bc3377d8205cbf90e8021fcacdffc7cfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
