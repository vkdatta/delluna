export const name="brightness_3";
export const id="dl_a7f70018b50bf698f4d9";
export const url=new URL("../icons/brightness_3.svg?v=74ab93b68a1388a49872e8c9aff900b510357965479a5f79caea3b5de828ca5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
