export const name="toys_and_games";
export const id="dl_4c2c64f82fb81a257482";
export const url=new URL("../icons/toys_and_games.svg?v=9a8b37e42d006f28399fde779618a425657faef3a897d460472ebf2864b09c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
