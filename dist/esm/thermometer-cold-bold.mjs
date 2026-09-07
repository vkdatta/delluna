export const name="thermometer-cold-bold";
export const id="dl_2901401b10a647439c10";
export const url=new URL("../icons/T/thermometer-cold-bold.svg?v=f02bd45a946894a23a7a55a3bf5c39c0c14ef52b9b8263960599a3174da60972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
