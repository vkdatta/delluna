export const name="bedroom_parent-fill";
export const id="dl_eaa185f3bc682d92a264";
export const url=new URL("../icons/bedroom_parent-fill.svg?v=04a99299c88f771d583d7dbdd79d8750866e27c8a2526bcec9401b4ad6e71c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
