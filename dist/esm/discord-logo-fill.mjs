export const name="discord-logo-fill";
export const id="dl_afe2623dfab14955bc5d";
export const url=new URL("../icons/discord-logo-fill.svg?v=7fb7a498dfd3d77154a1487a85b95c5da6c8de71b603fd9289ef1341bc3bec14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
