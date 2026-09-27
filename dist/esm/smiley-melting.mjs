export const name="smiley-melting";
export const id="dl_dd45f684d0e2b9f6b8c6";
export const url=new URL("../icons/smiley-melting.svg?v=5d32a048a9f5680942e9e33369246a64001bfc1cfdfb79255abab063970b9b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
