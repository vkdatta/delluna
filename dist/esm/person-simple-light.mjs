export const name="person-simple-light";
export const id="dl_ad39c367453a4c97ad9d";
export const url=new URL("../icons/person-simple-light.svg?v=c8215c303655cb873d3d1856002e26df3bff86720bebbba852879d9e28586b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
