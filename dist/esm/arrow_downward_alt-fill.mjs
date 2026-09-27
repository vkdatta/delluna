export const name="arrow_downward_alt-fill";
export const id="dl_2647d6afcc5e5ef86c27";
export const url=new URL("../icons/arrow_downward_alt-fill.svg?v=b27fb2f266dc06dbbad2d4e0f693d3a7c83ba54a27b406299c6e6a4be479344b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
