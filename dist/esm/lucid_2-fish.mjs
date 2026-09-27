export const name="lucid_2-fish";
export const id="dl_df323d16eeb24015bb75";
export const url=new URL("../icons/lucid_2-fish.svg?v=9b1fe14eb79f80097cbf417480ce3e41d32229ec53ab492573a158ebac622fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
