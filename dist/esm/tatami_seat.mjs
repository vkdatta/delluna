export const name="tatami_seat";
export const id="dl_0f59fcf784847e57a130";
export const url=new URL("../icons/tatami_seat.svg?v=5bc24d426827d9983895fced3aea791513c97f74321c152df2419ef8f3f1898e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
