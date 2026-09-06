export const name="lucid_1-arrow-big-up";
export const id="dl_8b4d2ec492f74488bd51";
export const url=new URL("../icons/lucid_1-arrow-big-up.svg?v=391dd7eee317ae50dc989252ced3d6a144a24be469f57c844dd84cf15cb92883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
