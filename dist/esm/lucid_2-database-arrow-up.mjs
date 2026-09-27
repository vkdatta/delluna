export const name="lucid_2-database-arrow-up";
export const id="dl_eafac642e6544a4db559";
export const url=new URL("../icons/lucid_2-database-arrow-up.svg?v=25e505fd16ec87ef3453457eb32e8fbaaed569dde4fbcce50904fda0bd5c52d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
