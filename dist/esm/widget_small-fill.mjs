export const name="widget_small-fill";
export const id="dl_f6edc499e40345734661";
export const url=new URL("../icons/widget_small-fill.svg?v=9bb55e198f42fa1ef300e574e6ac274fd6deac7e9cbdaf9ad797e76a89cf51c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
