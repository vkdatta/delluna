export const name="spinner-bold";
export const id="dl_b1d4f95b7a411edd19e7";
export const url=new URL("../icons/spinner-bold.svg?v=84c8c293eb5eb3bfbe5547c7554a6e8a69f6486d4c4868ca379ade41ce4b996e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
