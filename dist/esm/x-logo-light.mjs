export const name="x-logo-light";
export const id="dl_6e697a54ea69586862ad";
export const url=new URL("../icons/x-logo-light.svg?v=990f9a916cd0614707f9ffb660d64dd12785b22637eb123e6ef26d8a1cfc466c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
