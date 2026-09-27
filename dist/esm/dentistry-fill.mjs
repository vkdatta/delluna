export const name="dentistry-fill";
export const id="dl_3d3bf06c4939b2548226";
export const url=new URL("../icons/dentistry-fill.svg?v=1ab5416adb7b8918e39259d983182c686d4717df6ea7a94f292f9ec854dd9d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
