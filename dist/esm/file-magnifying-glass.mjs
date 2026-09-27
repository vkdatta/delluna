export const name="file-magnifying-glass";
export const id="dl_061a5ec647824249a9d8";
export const url=new URL("../icons/file-magnifying-glass.svg?v=6483edab7c5aecf9d3bfca8c6e414865a703ed2fcad480085a818bbcb00ab273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
