export const name="lucid_2-hand-platter";
export const id="dl_3baee45fa2eb492693f4";
export const url=new URL("../icons/lucid_2-hand-platter.svg?v=2a74500d7d5ecd00232ccdba4b965b9405d75cd230a7544d1f93edd2c3e0c459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
