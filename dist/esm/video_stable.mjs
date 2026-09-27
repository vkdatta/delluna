export const name="video_stable";
export const id="dl_69ea9afad62198d51d7b";
export const url=new URL("../icons/video_stable.svg?v=06fb02226fe99e4cf8969df9fe2ba4e286170baf6b96da757ad7931e2e04cd95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
