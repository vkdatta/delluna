export const name="lucid_2-file-braces";
export const id="dl_7b66b26a1da6419fb627";
export const url=new URL("../icons/lucid_2-file-braces.svg?v=85cf94e664a77fd2bf51641b8c784b97a8dffaf703975dc1433ee76ad039bca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
