export const name="rv_hookup";
export const id="dl_274155abacbc408bbe78";
export const url=new URL("../icons/rv_hookup.svg?v=25d0fca2160f6f1f993667d70fcac9416eed07b19f099d740001caf7cfca49e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
