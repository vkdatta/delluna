export const name="globe-x-fill";
export const id="dl_38d04d4039cc420c9378";
export const url=new URL("../icons/globe-x-fill.svg?v=09dc5a107861b14a3bccd659cb1aa8879a388677de6646d4c517006b48bcc70f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
