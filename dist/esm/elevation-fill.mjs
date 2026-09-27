export const name="elevation-fill";
export const id="dl_0370c27e33bba18c0659";
export const url=new URL("../icons/elevation-fill.svg?v=93fd05233b567b79d024bdb8ac0b80d94e56c314ee2677e3266925d049428330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
