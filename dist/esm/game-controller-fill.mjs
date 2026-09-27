export const name="game-controller-fill";
export const id="dl_8daa2462cf6742908ee8";
export const url=new URL("../icons/game-controller-fill.svg?v=2398411e638a33b493b2913e584d30e1485e73e52c18e3bb30aa5d1b254ebcb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
