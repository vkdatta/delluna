export const name="fitness_tracker-fill";
export const id="dl_4e9569146e4c4a51cc9c";
export const url=new URL("../icons/fitness_tracker-fill.svg?v=d74c21c305ecdaa1edfa790fc109185937a86f4b5788ffe279f049eff0180158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
