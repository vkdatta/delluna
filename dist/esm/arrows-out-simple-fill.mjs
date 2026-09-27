export const name="arrows-out-simple-fill";
export const id="dl_80809fe463df45c0806d";
export const url=new URL("../icons/arrows-out-simple-fill.svg?v=b6664c48fc6bad79f23e39f0a4ff472617dd4e814bb2912e0894545646f2675b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
