export const name="gender-neuter";
export const id="dl_6a00e6f4f9aa47318d79";
export const url=new URL("../icons/gender-neuter.svg?v=63f38e0cd71cd830137c7298f2ac676fd95553655484411984427bc86ec4766d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
