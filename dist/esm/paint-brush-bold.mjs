export const name="paint-brush-bold";
export const id="dl_90aa01635e374781bc29";
export const url=new URL("../icons/paint-brush-bold.svg?v=fa9b5e6a5da860680020c7f31176c4d9bb8b014af782b61040f46399d0492542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
