export const name="church";
export const id="dl_b5bb3dd4dc704ceeb94a";
export const url=new URL("../icons/church.svg?v=28951c5590cee26a87f13b4230e350ece54fc5cccbbbc38708573f9fda390577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
