export const name="toys_and_games";
export const id="dl_fac0c3e2b5c64f0caafe";
export const url=new URL("../icons/toys_and_games.svg?v=df97c983e24033635661eeb3b13a8f520dd7b2dccbd4e17e3cc256b8da0d68ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
