export const name="folder-user-light";
export const id="dl_3d72efae8bdd47a8a824";
export const url=new URL("../icons/folder-user-light.svg?v=d6db4b0d13a70cd7f36bcf181e883ce8a7e8b417a4c9bb8f442150ed701b1351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
