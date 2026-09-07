export const name="dresser-thin";
export const id="dl_730accab3ec8471996cf";
export const url=new URL("../icons/dresser-thin.svg?v=0d537bf5297b4ae77169b9031c7d0ded4967188b3d4ae59d8a37396a83f0b1b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
