export const name="tv_gen";
export const id="dl_19a33b99e6373d0b97cd";
export const url=new URL("../icons/tv_gen.svg?v=b5c8cd30d429f3de75f61c406b8d0a743e9ec283b632ad2db82509d6f0a2f10c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
