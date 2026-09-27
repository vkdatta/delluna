export const name="curtains-fill";
export const id="dl_01160cca5445152b70e2";
export const url=new URL("../icons/curtains-fill.svg?v=785e55b6ce67c083baf54cdb4c6244f6af65c9f50ca9974ecde18d6f92d12e79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
