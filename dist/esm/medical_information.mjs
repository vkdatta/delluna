export const name="medical_information";
export const id="dl_232fc3d1d7a34db58c46";
export const url=new URL("../icons/M/medical_information.svg?v=fb38f643048d256c06f2c83e2b642381664bfef4a70529664ced148b522da860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
