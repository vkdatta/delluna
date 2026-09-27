export const name="lego-duotone";
export const id="dl_bfdb6e33a85443c490d6";
export const url=new URL("../icons/lego-duotone.svg?v=927dcc147738b92433428042086ef69ed9e56a2aa947f307b6a7fe723a071175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
