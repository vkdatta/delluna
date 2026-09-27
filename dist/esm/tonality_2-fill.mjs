export const name="tonality_2-fill";
export const id="dl_cc3df7fdd4b3fe08df21";
export const url=new URL("../icons/tonality_2-fill.svg?v=07b68f4e446e8885e5647ce3f7d0f388931096c1dfd5ce305fc1a0f333704254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
