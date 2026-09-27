export const name="encrypted_add-fill";
export const id="dl_35aa21f1d06e03c003d8";
export const url=new URL("../icons/encrypted_add-fill.svg?v=212fec1f7bc85f3cb32e81e5b93b2015707e268b067ce75e29659da022583c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
