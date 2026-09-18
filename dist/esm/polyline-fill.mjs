export const name="polyline-fill";
export const id="dl_85cde04c3e844092b97a";
export const url=new URL("../icons/polyline-fill.svg?v=68429af85f93d88ef432ffed0bb6434d0966fb4789ff69fa8d9b674e2521ce51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
