export const name="fast-forward-circle-thin";
export const id="dl_3797bf786a744a8b914b";
export const url=new URL("../icons/fast-forward-circle-thin.svg?v=5174327e34102eb715eb8cc41dca14acb1050b2095151983b3b93b7a3c38fb00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
