export const name="play-pause-fill";
export const id="dl_53d51b4e93fa4f54a4d3";
export const url=new URL("../icons/play-pause-fill.svg?v=1ec9a05976f076bba0518cc9d7b1ada47506d023c135cc21b890033206505460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
