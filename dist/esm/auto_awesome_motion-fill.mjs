export const name="auto_awesome_motion-fill";
export const id="dl_7c6d448e5c0313234178";
export const url=new URL("../icons/auto_awesome_motion-fill.svg?v=dd53d295d124d47cf7f3312b151631560990e7c00eb04360f266f1a64dc849ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
