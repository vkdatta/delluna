export const name="hourglass-duotone";
export const id="dl_4cff7c46b85846b4a37d";
export const url=new URL("../icons/hourglass-duotone.svg?v=3484d960a8e2094f9a7bbf4177184b2f874585345613618711e6d06280f4bb14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
