export const name="church-bold";
export const id="dl_4e4a9a5f35834b079086";
export const url=new URL("../icons/church-bold.svg?v=5e276801934e95f162cf9d9aa2d2c19ebaefddc694735bdf9a47da6a59540e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
