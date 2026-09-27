export const name="smart_outlet";
export const id="dl_3f74cd179a9fcd534b8a";
export const url=new URL("../icons/smart_outlet.svg?v=19ec03b8a0d96e7a78b182361595a2fbcb8e0f591b6dfe9c625f05c276494adb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
