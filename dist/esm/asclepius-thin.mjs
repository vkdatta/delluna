export const name="asclepius-thin";
export const id="dl_1ca19909781b45ccb83f";
export const url=new URL("../icons/asclepius-thin.svg?v=b4e731e9631ef43a18b720ea47c81ec6a44451571611b8386faae48178178676",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
