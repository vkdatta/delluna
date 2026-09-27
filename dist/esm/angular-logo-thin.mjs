export const name="angular-logo-thin";
export const id="dl_7c8ef72e393548a18db7";
export const url=new URL("../icons/angular-logo-thin.svg?v=bfc558761ed4d403007dd25dfb53bbd77e50f198459ff73084da3d47c629762c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
