export const name="hdr_off_select-fill";
export const id="dl_2d91f4672b35593e051a";
export const url=new URL("../icons/hdr_off_select-fill.svg?v=d523fabbef8c335f790b351e8b50512d8ce649ec4124581708928e594d3c7901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
