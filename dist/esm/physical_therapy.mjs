export const name="physical_therapy";
export const id="dl_f577b1f8d54f31b2091a";
export const url=new URL("../icons/physical_therapy.svg?v=fffdbc4f732d4ad593cc3e3784c587ec343cc24bbcdbc632ca971f6acd8cf379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
