export const name="turn_left-fill";
export const id="dl_4a17054c4a80d56d6539";
export const url=new URL("../icons/turn_left-fill.svg?v=668e6bdd46e37259c5a7190283383967d80f94789aac28dd3231e102856e43fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
