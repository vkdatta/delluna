export const name="12mp-fill";
export const id="dl_9611671466ae41fa8e60";
export const url=new URL("../icons/1/12mp-fill.svg?v=efb8807803330d32436a43e4514c1f341f9bcf0b2376b2bf2f936a701e62e62e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
