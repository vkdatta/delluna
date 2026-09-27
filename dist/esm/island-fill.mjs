export const name="island-fill";
export const id="dl_fca75b2b8fff44bdacc1";
export const url=new URL("../icons/island-fill.svg?v=00e7d683019b093b2cd09c22fa82390bd6e732d55e1511e0724b730f2c835acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
