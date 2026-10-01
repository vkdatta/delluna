export const name="electric_bike";
export const id="dl_e84db31c8e0c709916aa";
export const url=new URL("../icons/electric_bike.svg?v=6694773d87cedd82cdae53e59548b7867724709179fe08871100dde68a95ac1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
