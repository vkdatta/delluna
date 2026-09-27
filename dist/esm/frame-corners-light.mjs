export const name="frame-corners-light";
export const id="dl_c204e80d88ad471eb903";
export const url=new URL("../icons/frame-corners-light.svg?v=5ed785204ee3a9670fec26ca6154796487a6e2579ce3ba8e08d95f8b5871263f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
