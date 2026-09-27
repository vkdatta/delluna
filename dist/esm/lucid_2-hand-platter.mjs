export const name="lucid_2-hand-platter";
export const id="dl_3baee45fa2eb492693f4";
export const url=new URL("../icons/lucid_2-hand-platter.svg?v=b5b363eb3104f773484254603e21d29d0514575ff64849ad7bd3ca086dfb9ef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
