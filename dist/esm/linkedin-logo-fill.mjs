export const name="linkedin-logo-fill";
export const id="dl_dd0b5bf6b58f45d1b3fd";
export const url=new URL("../icons/linkedin-logo-fill.svg?v=6fcb48a8cb8f93b0c04c40bbedb4aaad47de0060aea82081d8e0451d9c18b170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
