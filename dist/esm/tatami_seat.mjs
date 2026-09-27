export const name="tatami_seat";
export const id="dl_e16af1b9b700a46cc5fd";
export const url=new URL("../icons/tatami_seat.svg?v=1a6e5720bbf59100e606707f7005eacdb63dfe3060b85a13fe51d2e5c001e6f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
