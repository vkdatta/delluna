export const name="lucid_1-blocks";
export const id="dl_8ac24224feeb48acac54";
export const url=new URL("../icons/lucid_1-blocks.svg?v=009d4a48479c48c88c1c05901abe3658f6ec64c35061abf7ca54721abba6f320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
