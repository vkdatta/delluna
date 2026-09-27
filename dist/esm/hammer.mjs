export const name="hammer";
export const id="dl_0e4c14960616472eba60";
export const url=new URL("../icons/hammer.svg?v=62c8d72ea4f65ad011657e3c9379c8fb8daf885bc2dbb2f3eaeeeffee75a9985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
