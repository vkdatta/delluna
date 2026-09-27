export const name="communication";
export const id="dl_0ebb9914a86838b4ef92";
export const url=new URL("../icons/communication.svg?v=be51e2f4992053a779d681411d1b8b507184451b3ba2601d0955da51f393303d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
