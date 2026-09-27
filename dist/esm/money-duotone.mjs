export const name="money-duotone";
export const id="dl_8502c2a9c9834286a720";
export const url=new URL("../icons/money-duotone.svg?v=bf476a6a03e3d478746d825181fccddbd779486760d49a45309647bac9fd69dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
