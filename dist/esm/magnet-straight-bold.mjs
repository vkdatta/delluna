export const name="magnet-straight-bold";
export const id="dl_9cba3e4ad8584d44aeb7";
export const url=new URL("../icons/magnet-straight-bold.svg?v=1f8e3da10f91e47a452a096d9645ca9f650930551742faa43bbd88f6ce4dbb70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
