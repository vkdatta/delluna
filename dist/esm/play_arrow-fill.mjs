export const name="play_arrow-fill";
export const id="dl_41a7417a5cec50f5cc40";
export const url=new URL("../icons/play_arrow-fill.svg?v=faf5f74df70a5ac665d326473e4ca756a298819026a1bd3be8994fe00193e4ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
