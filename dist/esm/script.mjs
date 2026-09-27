export const name="script";
export const id="dl_67f26bad16463131ae87";
export const url=new URL("../icons/script.svg?v=0fce4c8d63b3435df41388f680c409bc379865458da6eb1b0372291dd3d4155e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
