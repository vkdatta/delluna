export const name="badminton";
export const id="dl_1df4ff306eac46ebb866";
export const url=new URL("../icons/B/badminton.svg?v=3ede60ad9aec2de87b9d0597e182e07ad9ae0fdf0c6adbe192d738ac61919fdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
