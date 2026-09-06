export const name="file-ts-thin";
export const id="dl_73b4d7d2137f4cd98c22";
export const url=new URL("../icons/file-ts-thin.svg?v=ea8d104a9e45f210d95e0a9ba00e1196837fd2ae90b548075f37f0d08eb1ca07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
