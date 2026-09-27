export const name="copy-simple-duotone";
export const id="dl_f7ff2d339449426eba65";
export const url=new URL("../icons/copy-simple-duotone.svg?v=42d17e18fcbdc2121f73ee5f2fa11d55e52cfc675913f8f39b0c7bdce1bb9359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
