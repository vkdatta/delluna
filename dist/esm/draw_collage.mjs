export const name="draw_collage";
export const id="dl_eddc161019df59347072";
export const url=new URL("../icons/draw_collage.svg?v=d690b88791056057980fac2cde8fc4cc55ef30eb485996c1d4d303054c5c9f87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
