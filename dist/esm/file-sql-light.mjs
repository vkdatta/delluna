export const name="file-sql-light";
export const id="dl_faf89ea8f4b44018b4d6";
export const url=new URL("../icons/file-sql-light.svg?v=5f263395bd1a530bb8f83ef35c0cfc17f887ce11306726142743f04fbce1a4b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
