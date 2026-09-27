export const name="file-sql-duotone";
export const id="dl_dc342fc453aa4b80abb5";
export const url=new URL("../icons/file-sql-duotone.svg?v=6f720cfd80404e05dd0180978f4e910d8d8978a43e1df238a564c2d53bd30394",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
