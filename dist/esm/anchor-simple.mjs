export const name="anchor-simple";
export const id="dl_ae5ffc8730af43dc8c4d";
export const url=new URL("../icons/anchor-simple.svg?v=275006450e3f2d76df4a4c02e955632f63f506b0c59060a5251f15aad6ecd04c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
