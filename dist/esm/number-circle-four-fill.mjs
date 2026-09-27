export const name="number-circle-four-fill";
export const id="dl_b5efa43766d64190b9e9";
export const url=new URL("../icons/number-circle-four-fill.svg?v=a8fb51988d2dbc2a9d6110a1e584e39672c971d9a19e07db9c49e10530e3c5fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
