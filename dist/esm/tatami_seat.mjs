export const name="tatami_seat";
export const id="dl_8bde5b18487346f29210";
export const url=new URL("../icons/tatami_seat.svg?v=311c08103abfcf7521c3ccc2ed5c36b01b90a45f44b96992551dcc95a72d0214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
