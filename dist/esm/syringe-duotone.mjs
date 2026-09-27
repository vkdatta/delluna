export const name="syringe-duotone";
export const id="dl_5d431bf9ec14e71d7a89";
export const url=new URL("../icons/syringe-duotone.svg?v=277db5f7bbc147223a38fff3061604296049dbb71869e91c0cc73068b7415c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
