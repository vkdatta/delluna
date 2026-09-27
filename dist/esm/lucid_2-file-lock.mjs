export const name="lucid_2-file-lock";
export const id="dl_6e24ab43d1984c358f51";
export const url=new URL("../icons/lucid_2-file-lock.svg?v=036d03643bae371f4f29d211ac0bf4f46a2bd160574f0f0e82b0c8f6d1878b06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
