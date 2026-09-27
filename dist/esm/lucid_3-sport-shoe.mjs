export const name="lucid_3-sport-shoe";
export const id="dl_fa084c329ea14673baa4";
export const url=new URL("../icons/lucid_3-sport-shoe.svg?v=eae7d3822b89413a144681632c14a942917a5d02cf756d49893ec8133dfdee1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
