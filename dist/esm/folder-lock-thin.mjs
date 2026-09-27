export const name="folder-lock-thin";
export const id="dl_140f8545aa5048c79c8b";
export const url=new URL("../icons/folder-lock-thin.svg?v=e10feae78d2029e5c352277022ae8f6e50bfad56a846962ebb06b88b036201f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
