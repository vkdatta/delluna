export const name="match_case";
export const id="dl_0cd53558965e9094c116";
export const url=new URL("../icons/match_case.svg?v=285b127638d2894d32493198774eabc7e24d81384930ab83d74bdf2454bb8478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
