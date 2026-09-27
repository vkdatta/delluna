export const name="laptop";
export const id="dl_33818e21249a48a09782";
export const url=new URL("../icons/laptop.svg?v=a83f6755bb0d352073eb34b22cc71de9bdc621524284386aa1407a8ca928828b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
