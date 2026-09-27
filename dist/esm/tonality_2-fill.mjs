export const name="tonality_2-fill";
export const id="dl_5c401cb99dc75027138c";
export const url=new URL("../icons/tonality_2-fill.svg?v=e3a5fc15896242566ec5ab14a9d6158f0f361f21767ecdba7d8dc7fc9466eacb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
