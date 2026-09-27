export const name="piano_off-fill";
export const id="dl_6bbd402b523cb527c261";
export const url=new URL("../icons/piano_off-fill.svg?v=7c6026cfcde905929efaf83b3816a0f94d70b9e0e7334bbe1eadfd5774938ee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
