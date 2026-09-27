export const name="toys_and_games";
export const id="dl_8852ff74baa80850c42b";
export const url=new URL("../icons/toys_and_games.svg?v=769782e9235f6ce4a80a86bb65ff3e7bf8ccab5e5aa4be65dd4e946113beafd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
