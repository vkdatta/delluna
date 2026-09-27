export const name="lucid_3-solar-panel";
export const id="dl_1b6242b3fb49404cb7f9";
export const url=new URL("../icons/lucid_3-solar-panel.svg?v=9c44a783096687be5cde6f57621b6077dc0b27d6e0ce367f521c47ae5a5f7baa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
