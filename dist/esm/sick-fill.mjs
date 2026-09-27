export const name="sick-fill";
export const id="dl_88b844c3378974099a4e";
export const url=new URL("../icons/sick-fill.svg?v=b998c8f45596d095e009ffc0e7d7050c844ed8022f08898202c5400ae329a61c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
