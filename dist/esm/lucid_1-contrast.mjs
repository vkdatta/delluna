export const name="lucid_1-contrast";
export const id="dl_de8dd6d6492c4e19acfc";
export const url=new URL("../icons/lucid_1-contrast.svg?v=e9708a10c8d327723f90e8feef34de843ae2cf7342a8480aea23039c376bddb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
