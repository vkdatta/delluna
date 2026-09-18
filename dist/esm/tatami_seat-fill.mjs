export const name="tatami_seat-fill";
export const id="dl_43e08a4a6bfe4156bfd8";
export const url=new URL("../icons/tatami_seat-fill.svg?v=d17a0e1422950c6ece42139139d9fbe4350b196bb965a94098ef09438b09a3fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
