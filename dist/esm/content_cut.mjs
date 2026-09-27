export const name="content_cut";
export const id="dl_5fcaa7ee281f5478d150";
export const url=new URL("../icons/content_cut.svg?v=720a4fe6cdc35fdfd9961ef86c6e6d3a327978801c4e9a925d93a67d496f3c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
