export const name="option-light";
export const id="dl_3a2611e0a95e4c6a9118";
export const url=new URL("../icons/option-light.svg?v=9dabb5bda8be3d369bc236063b14b9180689a088c85bf33b7a6f4eb5ab729367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
