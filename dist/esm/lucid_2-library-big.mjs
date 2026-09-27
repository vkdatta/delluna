export const name="lucid_2-library-big";
export const id="dl_b41ccf4e83b0496d99f7";
export const url=new URL("../icons/lucid_2-library-big.svg?v=67782f62844d04230906ce8c107725321907be309d92d534ee002177dcabe128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
