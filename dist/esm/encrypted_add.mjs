export const name="encrypted_add";
export const id="dl_0280029d938a462f9445";
export const url=new URL("../icons/encrypted_add.svg?v=d8a8bb61cdfdd5490a148a5e99df184c49a4615033394b202a118613c0ca7109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
