export const name="emergency_heat-fill";
export const id="dl_4b4c4dd1542fd92d12c0";
export const url=new URL("../icons/emergency_heat-fill.svg?v=8cb0c10a7b96533d4cb5b8b6a7af1a6bc3eb0ccc8e1ef7f3c5bc975d5b297b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
