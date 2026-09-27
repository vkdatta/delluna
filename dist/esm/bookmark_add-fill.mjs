export const name="bookmark_add-fill";
export const id="dl_afcdadc2220a7364fc86";
export const url=new URL("../icons/bookmark_add-fill.svg?v=cf7e068bacb33516af2207e6dd09004169413a3fc64562d9bb963c26781ca1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
