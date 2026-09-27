export const name="game-controller-light";
export const id="dl_02bbdc1a256344688dab";
export const url=new URL("../icons/game-controller-light.svg?v=51f818289eae68c46f3427529c35aaeccd94960c86a43fc6cc6bc27e094116ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
