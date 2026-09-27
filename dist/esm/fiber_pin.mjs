export const name="fiber_pin";
export const id="dl_edc05b9b8d51357830e6";
export const url=new URL("../icons/fiber_pin.svg?v=02b41384c3066c4ad9d0f088151253a1c336f3f137581e509251ae4fa41e432d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
