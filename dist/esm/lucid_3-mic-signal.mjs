export const name="lucid_3-mic-signal";
export const id="dl_7f63ebb6b35141609374";
export const url=new URL("../icons/lucid_3-mic-signal.svg?v=64bcdf429bae73dfe49da7edc0914951c293d4c33a9949009202b9182948f0e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
