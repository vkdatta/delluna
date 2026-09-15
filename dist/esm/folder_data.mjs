export const name="folder_data";
export const id="dl_6459ebd889b0481daae0";
export const url=new URL("../icons/F/folder_data.svg?v=175b59ff906a530735b3166d4bb25785b34dc3d54c4184f2a2e2fc74be29bb7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
