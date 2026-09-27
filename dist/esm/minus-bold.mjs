export const name="minus-bold";
export const id="dl_122f38e5168f4b2482be";
export const url=new URL("../icons/minus-bold.svg?v=205e78c48c598715aab7af72a2c59f10f377068e51244451c5d1ee78bffac4dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
