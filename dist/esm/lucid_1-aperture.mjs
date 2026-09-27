export const name="lucid_1-aperture";
export const id="dl_a76b97a9793142638a55";
export const url=new URL("../icons/lucid_1-aperture.svg?v=9e56d939678cd44599af25f69a2652cd8b39447906ca42ef2673bd73ca7ac5d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
