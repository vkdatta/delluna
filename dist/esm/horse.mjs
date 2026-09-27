export const name="horse";
export const id="dl_af6df556eacf48d8b55d";
export const url=new URL("../icons/horse.svg?v=712f28558bedae7b8709fd8b116880fb9fe74346d03a55537a5bdd1bec79c06c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
