export const name="globe_2_cancel-fill";
export const id="dl_f10c9f190b6801052fe7";
export const url=new URL("../icons/globe_2_cancel-fill.svg?v=fd9b9eed3ab21ebe3ff56cd0736050725beeff59fd0971963a17a0411124d1eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
