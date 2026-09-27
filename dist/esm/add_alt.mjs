export const name="add_alt";
export const id="dl_faee7f2f8a703c0f93f3";
export const url=new URL("../icons/add_alt.svg?v=7dc3d08aec3e2d812eecdea460ed8cbf3c6d312ce511f781471d59b023b57c68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
