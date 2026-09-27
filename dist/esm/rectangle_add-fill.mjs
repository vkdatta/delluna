export const name="rectangle_add-fill";
export const id="dl_7715135c9ff660c6539d";
export const url=new URL("../icons/rectangle_add-fill.svg?v=aaf4dc6c3331a3306fabfb2f656150e36cc82957585a2dd02b72dd9b6c051c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
