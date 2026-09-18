export const name="seat_window";
export const id="dl_126cc5f928124053a863";
export const url=new URL("../icons/S/seat_window.svg?v=890f47008062df8f6c6d2b69b6c5829958521439316d14fdf068543a48792a3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
