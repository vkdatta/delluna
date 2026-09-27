export const name="forklift-fill";
export const id="dl_81980138c101fe57560a";
export const url=new URL("../icons/forklift-fill.svg?v=daeaf57df5fa26e5e65f45d978395318c3d8b4f748b5334eb5c68a9a47f3af89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
