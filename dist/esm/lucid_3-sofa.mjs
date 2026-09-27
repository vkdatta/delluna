export const name="lucid_3-sofa";
export const id="dl_f769c9383d834587ae7f";
export const url=new URL("../icons/lucid_3-sofa.svg?v=5c593edae06d8cd640f616b9ca941a99adbad2f0ea3efc00c8759e72ac6a638a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
