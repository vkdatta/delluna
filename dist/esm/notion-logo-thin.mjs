export const name="notion-logo-thin";
export const id="dl_89fe07272b2e4a839f72";
export const url=new URL("../icons/notion-logo-thin.svg?v=c96b9726e57f3053125a4ec15aec21ee1f5e8ceaf2ddab129deae1e0a844aa36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
