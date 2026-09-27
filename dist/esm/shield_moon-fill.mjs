export const name="shield_moon-fill";
export const id="dl_594b02244a5f87db3f17";
export const url=new URL("../icons/shield_moon-fill.svg?v=878eabefa6bd0cb040156f6babd203599363cc045ac86bfacb193c4c438e2232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
