export const name="drone-thin";
export const id="dl_1d39b50a11754d8a8799";
export const url=new URL("../icons/drone-thin.svg?v=ef1e64842252d6934673e1a256b9e5aac5b3938917968231be58e4d4eb20b054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
