export const name="7k_plus";
export const id="dl_c73afe659fe9a8683d22";
export const url=new URL("../icons/7k_plus.svg?v=11d0c325a4a1ee91701deefeb2764057a9dd1342b3a4a1d9d6aa86da9f409f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
