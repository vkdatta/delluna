export const name="speed_1_2x";
export const id="dl_c6dafce34deac567f424";
export const url=new URL("../icons/speed_1_2x.svg?v=97049a1f803c768d2522a8cd7a6de115bdb8abcd5ef96708fdc055f38b303d57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
