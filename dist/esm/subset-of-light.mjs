export const name="subset-of-light";
export const id="dl_93c629996a46d985c87a";
export const url=new URL("../icons/subset-of-light.svg?v=f5598222ce570a873a52cc9a80b6295905e558672477d206ad4db62bee7cf622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
