export const name="person-simple-circle-fill";
export const id="dl_aa161c14ca2248589866";
export const url=new URL("../icons/person-simple-circle-fill.svg?v=2f06c298b2034e841484fff96e77ebd83f5eca06ca6c4fc229adc1e59284cadc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
