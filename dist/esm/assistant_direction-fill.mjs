export const name="assistant_direction-fill";
export const id="dl_c59609203bc64c34ab66";
export const url=new URL("../icons/assistant_direction-fill.svg?v=523f4173fde1e96c4f16434a42b1b5b4d1f3c54919fec1b25119c81b9328e6b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
