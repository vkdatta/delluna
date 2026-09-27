export const name="folder-bold";
export const id="dl_cec3d4e41261436f9d7d";
export const url=new URL("../icons/folder-bold.svg?v=a60b0acd5c09622b6198d4493793f5c1b501170eacc26ff458ab6c9565931487",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
