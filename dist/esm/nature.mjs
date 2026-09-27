export const name="nature";
export const id="dl_57a04234589d70f90844";
export const url=new URL("../icons/nature.svg?v=f2ab8e336b1cfe4d5aaac24bd485ee403ebb5b2bf9b31e34a5e1f1684267c24f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
