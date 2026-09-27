export const name="breakfast_dining";
export const id="dl_3762caa3475a1edd6a4b";
export const url=new URL("../icons/breakfast_dining.svg?v=0ab36a72dfd1b42f08c08588773be402ae2c30b30e2d219ab86173bb77d3dbf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
