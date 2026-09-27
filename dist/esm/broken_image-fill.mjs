export const name="broken_image-fill";
export const id="dl_9ccdf0727814a21a8feb";
export const url=new URL("../icons/broken_image-fill.svg?v=4e4a3b6043c061b6354f18864883f415fde0cbeed422a32227a615659ec94a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
