export const name="sports_bar";
export const id="dl_2059030f177e6ed5a2fd";
export const url=new URL("../icons/sports_bar.svg?v=d6c646bb995e3ec97f5ae22259a157e28ae3331d2c7d8e30ede3a7362c7720ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
