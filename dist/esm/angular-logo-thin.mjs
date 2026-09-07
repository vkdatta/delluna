export const name="angular-logo-thin";
export const id="dl_7c8ef72e393548a18db7";
export const url=new URL("../icons/angular-logo-thin.svg?v=23fe81bc9254a00082f407cb1b7df8c4fd137d443158c1de7853fae87f9e00c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
