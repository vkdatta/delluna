export const name="lucid_3-package-check";
export const id="dl_a862c7c27eb14d059cc2";
export const url=new URL("../icons/lucid_3-package-check.svg?v=05180e88c9eb737edefc62e014cd08d175789f0de3271ab179601038beeafb9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
