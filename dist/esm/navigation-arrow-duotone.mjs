export const name="navigation-arrow-duotone";
export const id="dl_f9f87265098e458b9cdb";
export const url=new URL("../icons/navigation-arrow-duotone.svg?v=e8d0e0c6837631ce41e3ed167c354404e049c6bf77a506d6f085929d8a3a1967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
