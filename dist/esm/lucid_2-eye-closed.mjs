export const name="lucid_2-eye-closed";
export const id="dl_0d7fd46ed8344c0a87cd";
export const url=new URL("../icons/lucid_2-eye-closed.svg?v=b0cb2dd82506e754fa0bc38014202eff08524871cad869254f6cfa56726b0db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
