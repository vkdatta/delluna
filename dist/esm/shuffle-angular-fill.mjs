export const name="shuffle-angular-fill";
export const id="dl_f848689bf4a7ec83fe81";
export const url=new URL("../icons/shuffle-angular-fill.svg?v=1510091929248e0e0f9917364f47d1e0bc49f2e4b9a79d923283ee8d450a8bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
