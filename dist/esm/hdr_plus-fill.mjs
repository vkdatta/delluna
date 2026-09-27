export const name="hdr_plus-fill";
export const id="dl_6bdf586440413eb6bc70";
export const url=new URL("../icons/hdr_plus-fill.svg?v=428a22a50ae9bd49d1209203842825841890aa56d4f8b274910ac5f588e017ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
