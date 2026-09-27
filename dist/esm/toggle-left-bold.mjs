export const name="toggle-left-bold";
export const id="dl_fcfa616d781d91426090";
export const url=new URL("../icons/toggle-left-bold.svg?v=fb34375ba661857a32874ae2c21bb4549d33e9fa56399cf1971ecefc5068ced4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
