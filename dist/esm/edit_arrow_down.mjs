export const name="edit_arrow_down";
export const id="dl_f1f85672762811f1fe4f";
export const url=new URL("../icons/edit_arrow_down.svg?v=54d032a80eb9b269f462b6e494e599ed737ade635058b1345819dacd50013502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
