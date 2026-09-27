export const name="scoreboard";
export const id="dl_95b0a4dff90a1906c710";
export const url=new URL("../icons/scoreboard.svg?v=a3e2bc5760135f8b754f40d8105ffe63b121c35501697f3fe16d4251aaf49cd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
