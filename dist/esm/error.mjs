export const name="error";
export const id="dl_059347d5246145878581";
export const url=new URL("../icons/error.svg?v=91759d1a118b32fc192fb4837c92ea7db14a93f5d1d537fefde5605b6cb538c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
