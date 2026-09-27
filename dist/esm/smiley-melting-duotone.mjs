export const name="smiley-melting-duotone";
export const id="dl_c792c386ff2c624ab1df";
export const url=new URL("../icons/smiley-melting-duotone.svg?v=6d93d0cff858b533f38053abd71ef396249a84704d618bca5681c82d0c3011a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
