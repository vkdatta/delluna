export const name="tatami_seat-fill";
export const id="dl_e7c7309468ab9539185d";
export const url=new URL("../icons/tatami_seat-fill.svg?v=d7549e0f0e94f06c1b733bca0ef1ae6647439ddbfcb1980017c6bcc384ecd172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
