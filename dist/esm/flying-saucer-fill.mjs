export const name="flying-saucer-fill";
export const id="dl_e7f96558ecce4d5e8675";
export const url=new URL("../icons/flying-saucer-fill.svg?v=3c4720e864862215af2be0cddd209e34bd0af0c3a264f9f9c952fec6197e9a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
