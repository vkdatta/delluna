export const name="coffee_maker";
export const id="dl_f66e25039f4bd3b7a4f8";
export const url=new URL("../icons/coffee_maker.svg?v=d0a80de01124526e0893f5ab14bf55a83838f1d022c0c18d7e068f0138dd352d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
