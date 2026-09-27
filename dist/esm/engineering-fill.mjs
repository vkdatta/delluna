export const name="engineering-fill";
export const id="dl_ddf356121f0415944aaf";
export const url=new URL("../icons/engineering-fill.svg?v=9fe04b59450f33fc3ccec879ae438fb4fea3a55dac50e258d7acdd1e3c2233d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
