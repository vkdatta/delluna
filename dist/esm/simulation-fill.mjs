export const name="simulation-fill";
export const id="dl_ac032c5822184d6db960";
export const url=new URL("../icons/S/simulation-fill.svg?v=292be8eb0b25fc5076be2cd9a680ffdc3335ea942cb30270b95f774a1e77e0d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
