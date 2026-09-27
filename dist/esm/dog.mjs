export const name="dog";
export const id="dl_87009f63ca274b1e9fec";
export const url=new URL("../icons/dog.svg?v=d91c7462407244dca56bdf77c6e8c139a0a31e308e931aa264340abc93b958bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
