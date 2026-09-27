export const name="lucid_3-mountain";
export const id="dl_5f68bbb237314da7b205";
export const url=new URL("../icons/lucid_3-mountain.svg?v=cc1e870aeb384b8a8498179fd2667da2254851f5a151d7e664e700cb76413a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
