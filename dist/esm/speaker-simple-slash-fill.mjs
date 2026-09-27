export const name="speaker-simple-slash-fill";
export const id="dl_138ecdf7e83f6dfb3387";
export const url=new URL("../icons/speaker-simple-slash-fill.svg?v=718a9e31ac02f139f5e54bfde241e54fa08a7ae7dc63f4a34dded61852043809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
