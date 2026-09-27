export const name="filter_none";
export const id="dl_f4180b4a6364bc242620";
export const url=new URL("../icons/filter_none.svg?v=ae8ff14be156115337f88feabc0af4dbe5f85136c63b0265de95bf52390babce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
