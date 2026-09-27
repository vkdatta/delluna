export const name="boat";
export const id="dl_ad041c50ab184922be04";
export const url=new URL("../icons/boat.svg?v=011bbe8242842c358c5f4ef5a21098563c951d9a08348545fd19eb82f1d8763b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
