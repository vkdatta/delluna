export const name="nature_people-fill";
export const id="dl_1adec25cb199451abf6d";
export const url=new URL("../icons/nature_people-fill.svg?v=61cd18d691b64b2407987563bae12d2469c9bc43466c04738726be8e23c3697d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
