export const name="sports_kabaddi";
export const id="dl_1225b0eac73199a50b52";
export const url=new URL("../icons/sports_kabaddi.svg?v=c7ed8b0bc069fd79541cd730e7361641e3fe53246fe5b76913d7518d40184663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
