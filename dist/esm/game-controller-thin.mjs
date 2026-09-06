export const name="game-controller-thin";
export const id="dl_ec1aca5186f7460283a1";
export const url=new URL("../icons/game-controller-thin.svg?v=99d5d804f7f2fedfbfdc519917fd7bdb07772f2b38941a0599037c0a569287ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
