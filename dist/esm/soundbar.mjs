export const name="soundbar";
export const id="dl_91fb8b2af7b949a61d6f";
export const url=new URL("../icons/soundbar.svg?v=fc3d9a498779a8cf26adc36a8fa28032633cd807d02659bdaccc781960495979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
