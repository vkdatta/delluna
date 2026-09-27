export const name="shelves";
export const id="dl_1bd625a7418bdf05bc97";
export const url=new URL("../icons/shelves.svg?v=79d2263a258c6ca1cc6019843e07bc7cb9c90c6e0cac4ea50732d7a17485feb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
