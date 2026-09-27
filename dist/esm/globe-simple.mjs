export const name="globe-simple";
export const id="dl_28f733bbcbcd473abbe4";
export const url=new URL("../icons/globe-simple.svg?v=9e37458c47d355a4260a67037335bb8d4361ccda4163094ef90cc7648a686e17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
