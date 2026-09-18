export const name="oil_barrel-fill";
export const id="dl_72378aa0debf4cfcbd95";
export const url=new URL("../icons/O/oil_barrel-fill.svg?v=fa3da38020efdff34fd65714303adcdfd90aa14ee541c2e724287d898b101810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
