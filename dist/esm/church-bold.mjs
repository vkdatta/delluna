export const name="church-bold";
export const id="dl_4e4a9a5f35834b079086";
export const url=new URL("../icons/church-bold.svg?v=15bb36f90b0cac66d31d9f041f80b6162e481380bbe719fa75a7da8ffeeb28f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
