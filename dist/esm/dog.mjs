export const name="dog";
export const id="dl_87009f63ca274b1e9fec";
export const url=new URL("../icons/dog.svg?v=dde2577cbe425ee4962c99714b7116989325d7dc96b3de5354f4bb88149f8637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
