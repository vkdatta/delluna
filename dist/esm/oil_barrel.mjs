export const name="oil_barrel";
export const id="dl_8d5c7400ac6a7222e79e";
export const url=new URL("../icons/oil_barrel.svg?v=25d53547ba22dc35957f70342fbaffc752db0488f760f80dd7f9d69be5b574b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
