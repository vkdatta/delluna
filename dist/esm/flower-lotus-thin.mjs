export const name="flower-lotus-thin";
export const id="dl_26af8a4ce02945c28caf";
export const url=new URL("../icons/flower-lotus-thin.svg?v=eee5e24c134916261172b355fba7c6833f9222e716a53a5a467cc1e0d75f399e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
