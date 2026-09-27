export const name="lucid_1-blocks";
export const id="dl_8ac24224feeb48acac54";
export const url=new URL("../icons/lucid_1-blocks.svg?v=525b3591d231e934a3fbd4a8ea11ba0beff11713753fcd85b6116df99c82332f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
