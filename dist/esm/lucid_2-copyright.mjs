export const name="lucid_2-copyright";
export const id="dl_dd88cd79431f4bafad68";
export const url=new URL("../icons/lucid_2-copyright.svg?v=39f1858774c9ec8827511d440f717c06ea7f8b26ea7b6164ae6f7876f619c1a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
