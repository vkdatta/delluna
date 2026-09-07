export const name="tooth-light";
export const id="dl_0c45806b5d914d9fb051";
export const url=new URL("../icons/T/tooth-light.svg?v=d40ff8a81e24d562c0e39c623ea2529361c133ee00f7f5b7abee20b382e681df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
