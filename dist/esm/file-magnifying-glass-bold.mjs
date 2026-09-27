export const name="file-magnifying-glass-bold";
export const id="dl_c65e129c5e0e48afac7d";
export const url=new URL("../icons/file-magnifying-glass-bold.svg?v=05b214dbfb57f81814af48e55ac2a8d7d0d0342b383bc818b3a2d96465650a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
