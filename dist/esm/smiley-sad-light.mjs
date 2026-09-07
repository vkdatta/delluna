export const name="smiley-sad-light";
export const id="dl_11ed12b1c0cc4005af3c";
export const url=new URL("../icons/S/smiley-sad-light.svg?v=8094fae98783967541428bbd85dca51ecded2c4c1c4ef2bd7d3c4f2690ae326e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
